Basics exercises
================

Scientific computing practises
------------------------------

.. questionnaire:: practises_questionnaire 10
  :title: Scientific computing practises questionnaire
  :submissions: 3

  .. pick-any:: 10

    Which of the following you should do to follow the good enough computing 
    practises?

    *a. Record the steps of data processing
    b. Version control your whole project
    *c. Write a README file
    *d. Separate source code and compiled code into src and bin directories.
    e. Comment out lines in code to modify program behaviour
    *f. Find libraries to make them do part of your work.

    a § Correct. It helps others to reproduce your project.
    b § False. Version control is not designed for binary file tracking and raw data does not require version tracking as it should be immutable.
    c § Correct. It is good to keep other contributors in mind by providing set up instructions and project overview.
    d § Correct. 
    e § No. You should find other ways to control program because commenting causes errors.
    f § Correct. There are many good libaries that ease work. Remember to test them first.


Computer set up
---------------

.. questionnaire:: set_up_questionnaire 15
  :title: Computer set up questionnaire
  :submissions: 3

  .. freetext:: 5
    :length: 10

    You should have set up your computer for scientific work. Open terminal and run "echo $SHELL".
    What does this print?

    /bin/bash
    !/bin/bash § See instructions again.

  .. freetext:: 5 regexp
    :length: 7

    Working on your terminal, verify your git version by running "git --version" (dashdashversion).
    What does it print?

    ^git version .+$

  .. freetext:: 5 regexp
    :length: 7

    Verify your Python version by typing in your terminal "python3 -V". What does it print?

    ^[Pp]ython 3.+$