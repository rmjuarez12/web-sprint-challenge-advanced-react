# Sprint Challenge: Advanced React - React Plants 🌿

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored some advanced React topics ⚛️. During this sprint, you studied class components, the component lifecycle and class component lifecycle methods, custom hooks, and React Testing Library 🐙. In your challenge this week, you will demonstrate your mastery of these skills by creating an app that will fetch data from a local server using a class component, displaying that data, using a custom hook, and writing tests for your app.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In meeting the minimum viable product (MVP) specifications listed below, your project should look like the solution examples below:

[Plant List Page](https://tk-assets.lambdaschool.com/88008802-846c-46bb-8cf8-11ace219e2bf_ScreenShot2020-04-30at12.39.22PM.png)

[Successful Form Submission](https://tk-assets.lambdaschool.com/90ebefd4-ee0f-4b1c-884c-1336ce87441d_ScreenShot2020-04-30at12.40.56PM.png)

You will also need to build the two tests in the `CheckoutForm.test.js` file and make sure they are testing what the test title says they are.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain how to build stateful class components.

**A: Class components are a much more robust way of handling components. Unlike functional components, in here we do have access to some special methods, some of them being the lifecaycle methods, such as `componentDidMount()` and `componentDidUpdate()`. These types of methods gives us access to some more creative ways on handling how a component behaves without the need of hooks.**

2. Describe the different phases of the component lifecycle.

**A: There are 3 phases of the component lifecycle, which are the Mounting phase, the Updating phase, and Unmounting phase. During the Mounting phase, is where you the component will call for the constructor function, which is what will help gather the necessary data, such as the props data when a component is called, as well as the necessary methods and such for the component when using a class. This phase is basically when we put the elements into the DOM. The Updating phase, as the name suggests, is when there is any type of change on the component. This could be a change in the data from a prop, or a force refresh of the component. This phase is what helps keep the component always in sync with any data we may be calling. Last, but not least, the Unmounting phase. This is used whenever we want to remove a component from the DOM. As the name implies, this is in case we have no use of a certain component in a certain are of the app, so we can just remove it, helping with boosting performance by not adding extra things into the DOM.**

3. Demonstrate an understanding of class component lifecycle methods.

**A: There are 3 main class component lifecycle methods, `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()`. The `componentDidMount()` method will be called when the component first renders, so it is called only once. This is called once your component is already placed on the DOM, so it happens after the `render()` method. The `componentDidUpdate()` method is called when there is a change of any kind in the component's data, which it can be props or state data. This is useful when you need your component to constantly update to get new data, most commonly from an API request. You must make sure, however, to just call certain function when you know what data needs to change(by using conditional statements), otherwise you run the risk of getting infinite loops. Lastly, the `componentWillUnmount()` method is used when you want to remove the component from the DOM. This is very helpful when you want a certain component removed from view(for example, a notification) that will not longer be needed once the user decides to close it.**

4. Define stateful logic.

**A: Stateful logic is basically what tells the App what to do. As the name implies, is when you create a "logic" through functions by using states. The functions you create is the logic that you use to make a certain action happen. For example, a form may have a function that will handle how the submission process is handled, and more than likely, it will need a validation function to ensure the form does not submit wrong or empty data. This is a type of logic. Then, since the form itself uses states to store the data from each field, that is the stateful part of stateful logic. So, in other words, stateful logic is basically creating functions that uses states.**

5. Describe how to test a React component with React Testing Library.

**A:**

---

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.

## Instructions

### Task 1: Project Set Up

_This project uses a local server for the data fetching. You will need three seperate terminal windows open:_

1. _one for your server_
2. _one for your React app (in the /client folder)_
3. _and one to run your tests_

_Please follow the setup instructions closely so that you can get everything up and running smoothly_

**Basic set up**

- [x] Create a forked copy of this project
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] [OPTIONAL] Create a new branch: git checkout -b `<firstName-lastName>`. If you choose to do this, you will need to merge your working branch into the master branch and push your final code to master in order for the submission to work with CodeGrade.

\_Note: Ignore the `mocks` directory. That is in place for the CodeGrade tests

**Setting up the CodeGrade webhook**

Go [here](./CodeGrade-webhook.md) to setup the CodeGrade webhook before you begin.

**Starting the server**

- [ ] Run `npm install` to download dependencies for the server.
- [ ] Run the server using `npm start`.
- [ ] Open a new browser tab and navigate to `http://localhost:3333/plants` - if you see a JSON object with plants data, then you know the server is running 👍

**Starting the React app**

- [ ] In a separate terminal cd into the `client` folder and run `npm install` to download dependencies.
- [ ] Still inside the `client` folder run `npm run start` to run the client application.
- [ ] Your browser should open up the project as normal

**Starting your test runner**

- [ ] In the final terminal window, make sure you are in the `client` folder still
- [ ] Start the test runner with `npm test` (I recommend doing this only when you're testing - any change in your app will make the tests run, and that could eat up your computer power)

**Commit and Push OFTEN!**

- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin master`, or, if working on your own branch: git push origin <firstName-lastName>`.

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

#### Plant List

Display a list of the plants from the server. This should be done in the class component `PlantList`.

- [ ] In the `PlantList` class component, fetch data from the server you now have running - the data can be fetched from `http://localhost:3333/plants`
- [ ] Set the data to a state property called `this.state.plants`
- [ ] The render function is already built and styled. Once the data is on the state, you will see the list of plants, and you will have the functionality to add a plant to the cart

#### Shopping Cart

Nothing needs to be done here. You _will_ have to navigate to the cart page in your app so you can go to the checkout form for the next step.

#### Checkout Form

The form is working, but it is currently controlled by local stateful logic. We want to control this form with a custom hook.

- [ ] Build a custom hook called `useForm`, and use it in your CheckoutForm component to control the form's stateful logic

_Note: You built a useForm hook in the guided project this week. You will probably need to use that as a guide to complete this step. However, try and build it out first before you peek at the guided project. And *do not* copy/paste directly from the guided project!_

#### Testing the Checkout Form

- [ ] Build out the tests listed in `CheckoutForm.test.js`. You will need to make sure they are testing what the test title implies they are testing
- [ ] Make sure the tests are passing, and make sure you can cause the tests to fail purposefully, so that you know the tests are truly working

<hr/>
In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Add a filter input to the plant list page.
- [ ] Build and implement another custom hook - a dark mode hook would be great for this project, though you'll have to style the light theme ☀️ 🌙
- [ ] Add a test file for the `ShoppingCart` component and test that it displays plants there (you'll need some mock plant data for the test, and then you can pass that data in as a prop when you call `render` and render the component - see the example below)

```js
const plants = {{}, {}, {}} // with each object being a mock plant
test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />)

  ...

})
```

## Submission format

To submit, simply push your latest commit to the master branch and the CodeGrade webhook you setup will run automatically.
