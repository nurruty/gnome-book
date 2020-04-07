## GnomeBook
### Nicolas Urruy font-end assigment Altran

First download or clone re repo with

```
git clone https://github.com/nurruty/front-end-assigment.git
```

Install dependencies
```
cd front-end-assigment
```

```
yarn install
```
or
```
npm install
```

Run development mode with
```
npm run browser
```

To run in produccion mode
```
npm run server
```
Tests with
```
npm run test
```
To build the project run
```
npm build 
```
After building the project, the result files are found in /public.

# Problem
First I would like to write down what is my interpretation of the problem. When players arrive to Brastlewark they have two main conceners. First they need to quickly know who live there and secondly, what activiies do they perform. Having that information in mind, they may think of a better plan to help the citizens. So the main goal of the app is to let the user quickly find gnomes fast, but also be able to divide the population by their profession and relationship with each other.

# Solution
In first place, as every small town, there is people who are "well knonw", and who know a lot of the place, so it would be wise first to talk to them. Therefore in the HomePage, there is a section called "Relevant Gnomes". The criteria to choose that gnomes, is: those who have more jobs and more friends at the same time. The asumption is, that having a lot of those two parameters imply, more socialibization, thus knowing more people.
Also, the HomePage, show two big numbers, TotalPopulaiton and DifferentJobs. This are indicators that help users to have a fast understanding of the town. If the user clicks in either of the two it will be redirected to another page. TotalPoulation takes the user to the GnomesPage, in which it can see all the list of gnomes living in Brastlewark, with a small avatar and information about them. If the user clicks on any of the elements of the list it will be taken to the specic profile of the gnome. On the other hand the DifferentProfessions indicator takes the user to the ProfessionsPage, where each profession is listed by their name, and with smal resume of which citizens perfmor that profession. When clicking in one of them a new list with gnomes is displayed, but know sliced by their professions. Both lists, Gnomes and Professions can be filtered by name.

# Tecnologies
GnomeBook is written in React (v. 16.4.5) with Redux (v. 3.6.). Webpack (v. 1.13.1) is used to bundle the code and babel (v 6.10.4 as compiler. 
