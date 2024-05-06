## GnomeBook

First download or clone the repository with

```
git clone https://github.com/nurruty/gnome-book.git
```

Access the project
```
cd front-end-assigment
```
Install dependencies
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

To run in production mode
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
After building the project, the result files are found in the public folder. 

In order to evaluate the app I suggest run it in production mode:

```
npm run server
```

Go to http://localhost:3000 and start helping gnomes!!

# Problem
First, I would like to write down what is my interpretation of the problem. When players arrive to Brastlewark they have two main concerns. First, they need to quickly know who live there and secondly, what activities do they perform. Having that information in mind, they may think of a better plan to help the citizens. So, the main goal of the app is to let the user quickly find gnomes, but also be able to divide the population by their profession and relationships between each other.

# Solution
In first place, as every small town, there is people who are "well known", and who know a lot of the place, so it would be wise first to talk to them. Therefore, in the HomePage there is a section called "Relevant Gnomes". The criteria to choose that gnomes, is: those who have more professions and more friends at the same time. The assumption is, that having a lot of those two parameters imply, more socialization, thus knowing more people.
Also, the HomePage, show two big numbers, TotalPopulaiton and DifferentProfessions. This are indicators that help users to have a fast understanding of the town. If the user clicks in either of the two it will be redirected to another page. TotalPoulation takes the user to the GnomesPage, in which it can see all the list of gnomes living in Brastlewark, with a small avatar and information about them. If the user clicks on any of the elements of the list it will be taken to the specific profile of the gnome. On the other hand the DifferentProfessions indicator takes the user to the ProfessionsPage, where each profession is listed by their name, and with small resume of which citizens perform that profession. When clicking in one of them a new list with gnomes is displayed, but know sliced by their professions. Both lists, Gnomes and Professions can be filtered by name.

# State Managment
When data about the gnomes is received from a server, it is stored with Redux. When a new page is accesed first it looks up in the store, and if necessary it retrieves thae data again. An important aspect is that data is not only saved in the raw format the srever sends, but also some calculations are done in each fetch. The server sends the list of gnomes with their personal data, list of professions and list of friends, but as explained before other type of criteria is also, used to show data. Therefore, when information is fetched from the server another to collections are created. First a hashMap, which each key is a profession, and values are those gnomes who have that profession. The second is an array of the top 3 gnomes, ordered by the amount of professions and friends they have.

# Tests
Testing is done with react-test-renderer. Each component has a testing file wich evaluates if the Component is well rendered with a particular set of data. 
Run the test with:
```
npm run test
```


# Technologies
GnomeBook is written in React (v. 16.4.5) with Redux (v. 3.6.). Webpack (v. 1.13.1) is used to bundle the code and babel (v 6.10.4 as compiler. 
