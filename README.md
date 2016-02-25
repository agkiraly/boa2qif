CONTENTS OF THIS FILE
---------------------

* Synopsis
* Explanation
* Motivation
* Installation
* Contributors


SYNOPSIS
--------------------
A form to upload Bank of America PDF statements and convert the list of transactions to .qif file format.


Explanation
--------------------
1) Upload PDF file using web form.
2) Convert to text.
3) Parse/manipulate text as needed.
4) Format data in QIF file format.
5) Output data as file download.


MOTIVATION
-------------------
This project began as a way of importing my personal bank statements into GnuCash, which I use to track spending. 

This tool is NOT authorized by Bank of America. It is entirely the product of my own design, and basic skill level using Node JS.
Although it meets my personal needs, I realize there are many further enhancements that would be needed to make this at all production ready. 
It is offered here only as an example of code which I have produced solely on my own, as opposed to that written in collaboration with others.

I know there are free services on-line for managing your finances, but it offered a good opportunity to learn Linux and Node JS.
And I like having the flexibility to manage my own data and reports.
GnuCash is not Quickbooks, but it is still an effective tool.


INSTALLATION 
------------------
A package.json file exists with dependency information. 
Plus, you will need to install the Poppler "pdftotext" command-line utility, http://poppler.freedesktop.org.


CONTRIBUTORS
------------------
Alan G. Kiraly, https://agkiraly.github.io.
