# Rendering JSON to an HTML Resume

![Example Functionality](https://raw.githubusercontent.com/AncientAbysswalker/json-to-resume-renderer/master/md/header.png)

## Working Demo

A working demo can be found live here:

https://ancientabysswalker.github.io/json-to-resume-renderer/

## Guidelines

This was a short project written for a quick code project. The outline provided is as follows:

1. Convert your resume into a jSON object.
2. Use jQuery and write a function that gets the above json object as its input and generates
   HTML code that looks like your original resume.
3. You can use Twitter Bootstrap or any other library to help with the design of the html page.
4. BONUS 1: Make sure the resume still looks good when printed using the browser.

## Assumptions

I assumed that I can analyse the JSON structure as if the data has already been recieved from an API or service, negating the need for any callback or async/await. I also assumed that the JSON can follow a format of my chosing, as none has been specified. The format is specified below.

## JSON Format

My JSON implementation follows the following format. Any field should be able to be omitted without causing any issues, and the field should simply be omitted.

```
{
  name: string,
  name_subheader: string[],
  phone: string,
  email: string,
  location: string,
  github: string,
  portfolio: string,
  experience: Job[],
  projects: Project[],
  education: Education[],
  passions: Passion[],
  skills: Skill[]
}
```

Utilizing the following types:

```
type Job = {
  role: string,
  company: string,
  date: string,
  location: string,
  accomplishments: string[]
}

type Project = {
  title: string,
  status: string,
  date: string,
  github: string,
  accomplishments: string[]
}

type Education = {
  degree: string,
  school: string,
  date: string,
  location: string
}

type Passion = {
  title: string,
  icon: string
}

type Skill = {
  title: string,
  icon: string,
  attributes: string[]
}
```
