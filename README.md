CONTENTS OF THIS FILE
---------------------

* Synopsis
* Explanation
* Motivation
* Installation
* Contributors
* License


SYNOPSIS
--------------------
A form to upload Bank of America PDF statements and convert them the transaction list to .qif file format.


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

I know there are free services on-line for managing your finances on-line, but it offered a good opportunity to learn Linux and Node JS.
And I like having the flexibility to manage my own data and reports.
GnuCash is not Quickbooks, but it is still an effective tool.


INSTALLATION 
------------------
A package.json file exists with dependency information. 
Plus, you will need to install the Poppler "pdftotext" command-line utility, http://poppler.freedesktop.org.


CONTRIBUTORS
------------------
Alan G. Kiraly, @agkiraly


LICENSE
------------------
The MIT License (MIT)

Copyright (c) 2016, Alan G. Kiraly

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


