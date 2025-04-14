import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

// Get the current directory path from import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your images folder
const imagesDirectory = path.join(__dirname, "../assets/images");

// Path where the index.ts file will be created
const outputFile = path.join(__dirname, "../assets/images/index.ts"); // Change to index.ts file

// Read the images folder
fs.readdir(imagesDirectory, (err, files) => {
  if (err) {
    console.error("Error reading images directory:", err);
    return;
  }

  // Filter out non-image files, you can extend this array with other file types
  const imageFiles = files.filter((file) =>
    /\.(png|jpe?g|gif|svg|webp)$/i.test(file)
  );

  // Create the import and export statements for each image file
  const imports = imageFiles
    .map((file) => {
      const fileName = path.basename(file, path.extname(file)); // Get the name without extension
      return `import ${
        fileName.charAt(0).toUpperCase() + fileName.slice(1)
      } from './${file}';`;
    })
    .join("\n");

  const exports = imageFiles
    .map((file) => {
      const fileName = path.basename(file, path.extname(file)); // Get the name without extension
      return `${fileName.charAt(0).toUpperCase() + fileName.slice(1)}`;
    })
    .join(", ");

  // Generate the final content for the index.ts file
  const content = `${imports}

export {
  ${exports}
};
`;

  // Write the index.ts file
  fs.writeFile(outputFile, content, (err) => {
    if (err) {
      console.error("Error writing index.ts file:", err);
    } else {
      console.log("index.ts file generated successfully!");
    }
  });
});
