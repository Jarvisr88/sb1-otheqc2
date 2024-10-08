const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const output = fs.createWriteStream('project.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('Project has been zipped successfully.');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// Add files and directories
const directoriesToZip = [
  'src',
  'public',
  'pages',
  'styles'
];

const filesToZip = [
  'package.json',
  'tsconfig.json',
  'next.config.js',
  'postcss.config.js',
  'tailwind.config.js',
  'README.md'
];

directoriesToZip.forEach(dir => {
  if (fs.existsSync(dir)) {
    archive.directory(dir, dir);
  }
});

filesToZip.forEach(file => {
  if (fs.existsSync(file)) {
    archive.file(file, { name: file });
  }
});

archive.finalize();