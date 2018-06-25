'use strict';

/*module.exports = function(Blog) {

};*/
module.exports = function (Blog) {

    Blog.observe('before save', function verifyForeignKeys(ctx, next) {
        if (ctx.instance) { // for single model update
            // check ctx.instance.fkField
            var s = ctx.instance;
            var author = s.__data.author;            

            //Get the Application object which the model attached to, and we do what ever we want
            Blog.getApp(function (err, app) {
                //App object returned in the callback
                //PersistedModel.exists(id, callback ((err, exists)))
                app.models.BlogUser.exists(author, function (err, exists) {
                    if (err) 
                        return next(new Error(err));
                    //throw err;
                    if (!exists)
                        return next(new Error('Bad foreign key...'));
                });
            });
            next();
        }});
}
