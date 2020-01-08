# com-joshuakpearson-firebase

This is a total rebuilding of my websire [joshuakpearson.com](https://joshuakpearson.com). I am building this with ease of modification in the future. I am implementing a sign in for all users who with to contact me, along with storing all messages sent to me via the contact form in firebase. Personally, I will be able to sign in and modify any content found on the page without needing to modify the code itself. 

## Design Decisions

Firebase is an excellent resource for both authentication and document storage (who'd a thunk it). As such, I decided that all 'cards' that are displayed will be a single json object arranged as such:

```
export interface Card {
  page: string;
  header: { title: string; subtitle: string };
  img?: string;
  content: string;
  actions?: string;
}
```

This allows me to build each page using data from the database, and add or remove it from the page itself without touching code. 

## Why?

Because this is a simple personal project, I may pause development at any time to focus on my current job, other self education tasks, etc. My current site functions alright in the meantime of dev to deployment.
 

## Future Plans

I have no concrete plans for this to be anything more than a simple fact sheet, skill demonstration, etc. Feel free to contact me with any questions.
