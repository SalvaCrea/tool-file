// Tools Files
// ========

var self = module.exports;
var fs = require('fs');
/**
 *  Delete a File by path
 */
self.deleteFile = function( pathFile ){

    fs.unlink( pathFile, function(err){
      if(err) {
          return console.log(err);
      }
      console.log("The file deleted");
    });

}
/**
 *  Can write a file
 * @param  {[string]} pathFile        The file path
 * @param  {[string]} nameFile        Name + extension of file
 * @param  {[string]} content         Content of file
 * @return {[Boolean]}                True if good operation
 */
self.writeFile = function( pathFile, nameFile, content ){

      fs.writeFile( pathFile + nameFile, content, function(err) {
          if(err) {
               console.log(err);
               return false
          }
          else{
              console.log( "The file is writed" );
              return true;
          }
    });

}
/**
 * Get a file
 * @param  {[string]} pathFile  Path File
 * @return {[string]}           Content file
 */
self.getFile = function( pathFile ){
    return fs.readFileSync( pathFile, 'utf8')
}

/**
 * Get a file
 * @param  {[string]} pathFile [Path File]
 * @return {[string]}           [Content file]
 */
self.getFileJson = function( pathFile ){
    return  JSON.parse( this.getFile( pathFile ) );
}
