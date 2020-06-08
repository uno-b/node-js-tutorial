let fs = require("fs");

/*
So far, when creating/reading/updating/deleting files/folders, there are:
1. Asynchronous method - Doesn't block the code that follows after it.
    We have to provide a callback function for handing any errors.
2. Synchronous method - Blocks the code from running until the method finishes.
    Don't have to provide any callback function.

=> fs.unlink("(filepath)", (err) => { (if (err) throw err; };

Used for deleting a file. Deleting directories with files is not allowed,
so you have to use this method to delete files.
*/

fs.mkdirSync("stuff");
fs.mkdirSync("stuff2");

fs.rmdirSync("stuff2");

fs.mkdir("asyncDir", () => {
  fs.unlinkSync;
  fs.writeFile(
    "./asyncDir/createdAfterDir.txt",
    "Hello, my friends!",
    (err) => {
      if (err) throw err;
    }
  );
  fs.writeFile(
    "./asyncDir/createdAfterDir2.txt",
    "This file will be removed!",
    (err) => {
      if (err) throw err;
      fs.unlink("./asyncDir/createdAfterDir2.txt", (err) => {
        if (err) throw err;
      });
    }
  );
});
