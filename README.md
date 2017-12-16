# The cool patent
--------------
## Abstract
--------------
Finding the common characteristics  among influential patents can help inventors or technologist track patentable features of any technological inventions. Moreover,  this  can also help estimate a priori a “potential” patent’s influence. 

This project uses the US patent data provided by PatentsView.org .  Our approach consist of  using the number of references to individual patent to evaluate its influence. In addition, exploratory data analysis on dataset would be carried out  to find more general trends. The results of such analysis can further be improved  using appropriate machine learning techniques/algorithm.

Lastly, we present the results of our analysis by combining the various visualisation techniques taught in the class. The visualisation will serve as a tool to present the results of our analyses.  In particular the visualization will follow the “what” , “why”, and “how” framework. By this we mean, we address what the user sees, why the user intends to use a viz tool and how the visual encoding and interactions are constructed in terms of design choices. In summary, we will adhere to the doctrine that a good viz should help augment the human cognition system  and facilitate understanding of analytical results .

--------------------
## Research questions
---------------
From the analysis point of view we will focus on:
  * Is there a trend for the number of patents applications during the years?
  * Which countries have the most assigned patents?
  * What are the most popular technology fields for patents assigned in the last 5 years?
  * What's the most frequent technology field by inventor's country?
  * What percentage of patents belongs to private and what to organizations?
  * Are the citations inside each patent and the citations to a patent increasing with passing of the years?
  * How the number of citations relates to the category of the patent?
  * How "famous" is a patent?
From the visualisation perspective we focus on:
  * Data types appropriate for the representation of results from analysis (we will consider using a tree , Network  or geometry or  a combination of geometry and networks.
  * Possible actions for interacting with the Viz: Search, Query or Consume (discover, annotate, derive ) 
  * Visualisation targets: Trends, Outliers, Features, Correlation, Distribution and dependency.
  * Network or connection between data points: Topology, paths
  * Spatial information of patents (spatial data eg country locations)
  * Encoding (order, Map, shape), Manipulation (navigate, select) , Reducing (filtering ) of data points.
  * Interactive , simple and easy to use interface 

-----------------
## Dataset
-----------------
Patents dataset - we will use the patents dataset from http://www.patentsview.org/api/doc.html from where we can get the data through the API Endpoint. 
In addition we get datasets from http://snap.stanford.edu/data/cit-Patents.html. Information about this data sets can be found in http://www.nber.org/patents/ . Anyone interested in detailed description of the dataset should kindly read:

Hall, B. H., A. B. Jaffe, and M. Trajtenberg (2001). "The NBER Patent Citation Data File: Lessons, Insights and Methodological Tools." NBER Working Paper 8498.  http://www.nber.org/papers/w8498.pdf

The data sets for the map  were obtained from Natural Earth: http://www.naturalearthdata.com/downloads/50m-cultural-vectors/




------------------
## Milestone for Project
--------------
  * Nov. 11, 2017 - Get comfortable using the API, getting the needed data and trying to answer some of the questions and make some demo plots.
  * Nov. 21, 2017 -General outline for the visualisation paradigms to use and its feasibility. And also come up with a simple running prototype as proof of concept



