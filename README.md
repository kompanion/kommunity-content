# kompanion kommunity - curated content 🥑

This repo is used solely for storing and revisioning content for the kompanion kommunity.

```ts
// Content's type definition in Typescript 

// These types below (ex: TExpertiseLevels) are basically describing which strings are accepted for
// each property of the content model (expertiseLevel, category, format).

// "format?:" -> the question mark (?) means it's an optional property

type TExpertiseLevels = "beginner" | "intermediate" | "advanced" | "allLevels";
type TCategories = "CMS" | "GraphQL" | "Business" | "Themes" | "Workflow" | "CSS" | "SEO" | "React" | "PWA" | "DevOps" | "Design";
type TFormats = "video" | "article" | "audio" | "tutorial" | "course" | "book" | "tool";

interface IRecommendation {
  comment: string; // why is it important - max. 140char
  user: string; // the handle of the user in GitHub
}

interface IContent {
  title: string;
  url: string;
  recommendations: IRecommendation;
  category: TCategories;
  expertiseLevel?: TExpertiseLevels; // who is it for?
  format?: TFormats;
}
```

File names will come in the shape `slugified-url.json`.

## Importing from Notion

Super useful if you're constantly saving content from the web with [Notion](https://notion.so)'s webclipper. (More to write about this later)

1. Export your table as `.csv`;
1. Use [CSV to JSON Converter](http://www.convertcsv.com/csv-to-json.htm) to create a huge JSON array;
1. Find and replace in VS Code:
  1. find: `("importance": "[^"]*")`
  1. replace: `"suggestions": [{ "user": "YOUR_GH_HANDLE_HERE", $1}]`