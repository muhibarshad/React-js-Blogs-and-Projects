# React Form Pro-Tips: Level Up Your Skills

> `React` is a game-changer when it comes to building `user interfaces`, and one of its most powerful features is the ability to handle forms and user input like a pro! In this blog, we're going to explore some of the best practices, techniques, and pro-tips for working with forms in React, so that you can take your skills to the next level and build more efficient and user-friendly applications.

First and foremost, it's crucial to understand the concept of `controlled components` when working with forms in `React`. Controlled components are components that keep the state of the form in the parent component, rather than in the individual form elements. This allows for better handling of form **validation** and **submission**, and makes it easy to access and update the form data in the `parent component`


Are you ready to level up your form game in `React`? Let's explore the different strategies for **form validation** and pick the perfect one for your project!

First up, we have the `submit and validate` approach. This strategy is super simple and easy to implement, it only shows error messages when the user is ready to submit the form. It's a classic, **no-nonsense approach** that gets the job done.

```js
const handleSubmit = event => {
  event.preventDefault();
  const errors = validateForm();
  setErrors(errors);
  if (!Object.keys(errors).length) {
    //submit the formData
  }
};

```

Next, we have the ``validate on blur`` approach. This strategy provides **instant feedback** to the user and catches `errors` as they happen. It's like having a personal form coach, always there to catch your mistakes!
```js
const handleBlur = event => {
  const { name } = event.target;
  const error = validate(name, formData[name]);
  setErrors({ ...errors, [name]: error });
};

```

And finally, we have the `validate on every stroke` approach. This strategy is the most responsive and provides the most **immediate feedback**, but it can also be the **most annoying** for the user. It's like having a form drill sergeant, pushing you to be your best!
```js
const handleChange = event => {
  const { name, value } = event.target;
  const error = validate(name, value);
  setErrors({ ...errors, [name]: error });
  setFormData({ ...formData, [name]: value });
};

```

So, which approach is the best for your project? It all depends on your **specific requirements**. Do you want to provide instant feedback and catch errors early on? Go for the `validate on blur` approach. Do you want to be super responsive and provide the most immediate feedback? Go for the `validate on every stroke` approach. Whichever strategy you choose, make sure to test it thoroughly and provide a great user experience!



