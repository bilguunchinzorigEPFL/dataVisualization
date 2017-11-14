# The cool patent

## Abstract
Finding the common characteristics or relations to their features among influential patents, can help inventors to follow the same practice. And moreover, it opens possibility of predicting patent’s infuentience. In this project, by using number of references to individual patent, we’ll evaluate each patent’s influence. Then, we can do exploratory analysis on dataset and our evaluations to find general trends. From here, we will try to apply machine learning methods to create prediction model. We’re using US patent data provided by PatentsView.org in this project.

## Research questions
At the beginning we would like to see some general information:
* Is there a trend for the number of patents applications during the years? 
* Which countries have the most assigned patents? 
* What are the most popular technology fields for patents assigned in the last 5 years?
* What's the most frequent technology field by inventor's country? 
* What percentage of patents belongs to private and what to organizations?

Then we will focus on the citations:
* Are the citations inside each patent and the citations to a patent increasing with passing of the years?
* How the number of citations relates to the category of the patent?

We will also try to answer the question: 
* How "famous" is a patent?

## Dataset
Patents dataset - we will use the patents dataset from http://www.patentsview.org/api/doc.html from where we can get the data through the API Endpoint. With HTTP GET or POST method we can search for patents matching the query string and this will return the data fields we are looking for. The response data format is JSON. 

An example of a API call using the GET method:

```http://www.patentsview.org/api/patents/query?q={"_gte":{"patent_date":"2007-01-04"}}&f=["patent_number","patent_date"]```

This will return all patent numbers and patent dates after 2007-01-04

Also, the raw data is available for download, and maybe we will use it for some more complex queries.


## A list of internal milestones up until project milestone 2
* Nov. 11, 2017 - Get comfortable using the API, getting the needed data and trying to answer some of the questions and make some demo plots.
* Nov. 21, 2017 - We should have answered all of the questions and try to find a way to answer how "famous" a patent is. 

## Questions for TAa
* Does the focus need to be only on citations or we can study general caratheristics on the patents?
* Should we also use the dataset provided at http://snap.stanford.edu/data/cit-Patents.html and should we somehow combine the 2 datasets?
* Does it make sense to create a machine learning system to predict how cited a patent is going to be?
