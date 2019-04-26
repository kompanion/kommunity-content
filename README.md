# kommunity.dev content 🥑

This repository is used solely for storing and revisioning content for [kommunity.dev](https://kommunity.dev). If you're interested in the main repo with the source code for the site, refer to [`kompanion/kommunity`](https://github.com/kompanion/kommunity) 😉

## Adding content

If you want to suggest a new resource to the kommunity, simply fill-out the [submission form](https://beta.kommunity.dev/submit) in the official site. The content will be represented by a JSON object with the following interface:

```ts
// Content's type definition in Typescript 

// These types below (ex: TExpertiseLevels) are basically describing which strings are accepted for
// each property of the content model (expertiseLevel, category, format).

// "format?:" -> the question mark (?) means it's an optional property

type TExpertiseLevels = "beginner" | "intermediate" | "advanced" | "allLevels";
type TTopics = "CSS" | "Javascript" | "HTML" | "React" | "Gatsby" | "Serverless" | "Unsorted";
type TFormats = "video" | "article" | "audio" | "tutorial" | "course" | "book" | "tool";

interface IRecommendation {
  comment: string; // why is it important - max. 140char
  user: string; // the handle of the user in GitHub
}

interface IContent {
  title: string;
  url: string;
  recommendations: IRecommendation;
  topic: TTopics;
  lastUpdated: string; // 2019-04-30
  expertiseLevel?: TExpertiseLevels; // who is it for?
  format?: TFormats;
}
```

File names will come in the shape `slugified-url.json`.

## Pull request process

After submitting your pull request with the suggested content, maintainers will take a look at the resource to make sure it's aligned to kommunity.dev's topics and merge it into master. After merging, it'll be available after a website rebuild which, currently, is done manually, so allow a bit of time before it gets there or help [set-up the automatic CI/CD](https://github.com/kompanion/kommunity/issues/7) for the website 😄