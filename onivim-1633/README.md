Details

Issue
https://github.com/onivim/oni2/issues/1633

# Context
Onivim 2 is alpha, donateware, so building from source is the only option.
Observations
With vim - we have ^V kkk I // will insert
With onivim - we have kkk I // will not insert

With vim - we have ^V kkk c // will replace
With onivim - ^V kkk c // will not replace

Other notes - with change (c) we can see the editor change mode with I it does not.

Unit test MU_TEST(test_insert_block_mode) does the operations but does not check the file.  

Test output for the following code produces 
  char_u *lines[] = {"line1", "line2", "line3", "line4", "line5"};
  vimBufferSetLines(curbuf, 0, 3, lines, 5);

```
//  vimInput("<c-v>");
//  vimInput("j");
//  vimInput("j");
//  vimInput("j");
//
  vimInput("I");

  mu_check((vimGetMode() & INSERT) == INSERT);

  vimInput("a");
  vimInput("b");
  vimInput("c");

  char_u *line = vimBufferGetLine(curbuf, 1);
  printf("LINE: %s\n", line);
  line = vimBufferGetLine(curbuf, 2);
  printf("LINE: %s\n", line);
  line = vimBufferGetLine(curbuf, 3);
  printf("LINE: %s\n", line);
```
Outputs 

LINE: abcline1
LINE: line2
LINE: line3


Visual mode lines uncommented above result in 

LINE: line1
LINE: line2
LINE: line3

Consequently, it looks like visual mode isn’t getting run properly.

Changing VimInput(“c”) 
Should give abcine1, abcine2 (we are replacing the l with abc in block mode

LINE: abcine1
LINE: ine2
LINE: ine3
Conceptual Models

Hypothesis
ID
Confidence
# Hypothesis
Notes
Proof/Refute
1
High
Issue is within libvim, not vim




2
High
I and c have slightly different paths.
Is this within the editor or within the libvim?
Testcases within libvim, let’s look at them when we have it building.












# Proof/Refute Data
(1)
 

# Extra Data Needed
Architecture/event model.
Scratch Notes
Libvim ! = neovm

