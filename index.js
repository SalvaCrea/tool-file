// ToolsFile.js
// ========


var ToolsFile = {};
var fs = require('fs');
/**
 * cleanAssetFolder Delete Assets Folder
 */
ToolsFile.deleteFile = function( pathFile ){

    fs.unlink( pathFile, function(err){
      if(err) {
          return console.log(err);
      }
      console.log("The file deleted");
    });

}
/**
 * [ Can write a file]
 * @param  {[string]} pathFile      [The file path]
 * @param  {[string]} nameFile     [ name + extension of file]
 * @param  {[string]} content        [content of file]
 * @return {[Boolean]}               [True if good operation]
 */
ToolsFile.writeFile = function( pathFile, nameFile, content ){

      fs.writeFile( pathFile + nameFile, content, function(err) {
          if(err) {
               console.log(err);
               return false
          }
          else{
              console.log("The file is writed");
              return true;
          }
    });

}
/**
 * Get a file
 * @param  {[string]} pathFile [Path File]
 * @return {[string]}           [Content file]
 */
ToolsFile.getFile = function( pathFile ){
  console.log( pathFile );
  return fs.readFileSync( pathFile, 'utf8')
}

/**
 * Get a file
 * @param  {[string]} pathFile [Path File]
 * @return {[string]}           [Content file]
 */
ToolsFile.getFileJson = function( pathFile ){
      return  JSON.parse( this.getFile( pathFile ) );
}

module.exports = ToolsFile;
