ChatMaker
=========

Build your own chat client!

The framework provided in this page is all you need to build a local chat client. This application uses the Parse APIas a back-end, so you won't even need to run a server.

Your goal is to wire together the three helper functions in such a way that you have a working chat client. You can also check out an example of a working version.

Start by viewing the source code of this page, and saving it to a text file on your computer. You should be able to open that file right from the hard drive of your computer and see this same application. Once you do, you're free to start editing the file in an effort to start making your own version of the chat client.

You're also going to want to open the JavaScript Console, and use the debugger statement extensively in your JS code, to help you on your way to a completed app.

The same script that's showing you these instructions has also provided you several helper functions that make it easier to build the app. These 3 helper functions are all properties of an object in the global scope called Chat.
            
Next steps

To write this client, you'll probably want to complete the following steps in approximately this order. You'll probably have to do a fair amount of research along the way to understand all the terms and technologies mentioned here.
            
Play with Chat.display() in the developer console. Get it to show an example message.
                    
Display takes a string as its only input, and displays that string to the user in a bulleted list.
                    Use Chat.fetch() to download all the messages from the server.
                    
Chat.fetch() is asyncronous in nature, so it doesn't return anything. In stead, it accepts a callback function as its only argument.

When .fetch() is done fetching messages from the server, it will call your callback function, passing an array of strings as the only argument to the callback. Each string in that array is the text value of one chat message.
                                    
Use the two together to make your chat client display the messages available on the server.
Set this up to happen every 3 seconds. JavaScript offers several "timer" functions that will help you do this.
                
Use jQuery to wire up the input box and the submit button, allowing the user to enter their own chat messages.
                    
You'll need to use jQuery to select elements from the page that you need to manipulate. Once you have them available in a jQuery collection object, you'll need to use jquery's event handler registration methods to attach your desired behavior.
            
Next, in the advanced section, you'll start deleting the helper functions that came for free in ChatReactor.js and writing them yourself.
            
  In the first line of your code, include the statement delete Chat.display;.
                    
    This will erase one of the provided helper functions, forcing you to implement it yourself.
    You'll need to use jQuery to render an html version the message that gets passed in.
    You'll also need jQuery to add your html to the page, as a child of the messages container node.
                    
                
  Next, delete Chat.fetch;

    By default, the Parse API doesn't guarantee the order of the results, so you'll want to pass them an 'order' property 
    in the data you're sending along.                
                
  Last, delete Chat.send;
                    
    To submit a new chat message, you'll need to send a POST request to a RESTful resource endpoint on the Parse API. The 
    url for that resource is https://api.parse.com/1/classes/messages.
    The endpoint is expecting to get an object from you that contains a property named "text", and nothing else.
      NOTE: The Parse API expects the message data object you send to be encoded as JSON, so you'll want to stringify it 
      that way before POSTing it.
            
Finally, when you've completed all these steps, you should be able to delete the script inclusion of ChatReactor from your .html file. 

At that point, you'll discover one more issue that we paved over for you, but you can figure it out! Once you do, you'll have a fully-functional chat application that you wrote from the ground up.
