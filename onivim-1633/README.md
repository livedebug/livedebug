Details

Issue
https://github.com/onivim/oni2/issues/1633

# Pull requests and commits

[Unit test updates reproducing the problem](https://github.com/onivim/libvim/pull/215)

# Problem Summary
Onivim 2 is alpha, donateware, so building from source is the only option.
Observations
With vim - we have ^V kkk I // will insert
With onivim - we have kkk I // will not insert

With vim - we have ^V kkk c // will replace
With onivim - ^V kkk c // will not replace

Other notes - with change (c) we can see the editor change mode with I it does not.

Unit test MU_TEST(test_insert_block_mode) does the operations but does not check the file.  

# Hypothesis

ID | Confidence | Status | Hypothesis | Notes 
---|------------|--------|------------|------
1  | High       | Confirmed | Issue is within libvim, not vim | 
1.1 | High       | Confirmed | I and c have slightly different paths.
1.2 | Low | Unknown | OP_INSERT needs a bit more state enabled before it takes action
1.3 | Low | Unknown | Visual Mode is not fully setup for deletion |
1.3.1 | Low | Unknown | Statemachine is receiving the incorrect data to operate on


## Issue is within libvim, not onivim2
Test cases confirm, creating pull request to improve unit test coverage before diving into libvim.

## I and c have slightly different paths
Is this within the editor or within the libvim?
Testcases within libvim, let’s look at them when we have it building.


# Extra Data Needed
Architecture/event model.

# Scratch Notes

## 20200720
in normal.c, nv_edit, we have the code going down to the moving to begin of line (via beginline), so we should be at the right point for insertion.
Checkpoint - "I" seems to be pushing into sm_push, need to work out how it is being executed


## 20200719
`vim.h` contains OP_XYZ #defines, which map to different operators "c" is "OP_CHANGE" "I" is or "OP_INSERT".
OP_CHANGE is used in normal.c and ops.c, OP_INSERT is used in edit.c, normal.c, ops.c

OP_INSERT doesn't appear to be easily hit in the same way that OP_CHANGE is.

General logic is 
  - Finish operation
  - 
  
 state changes to 16
 
 I & c move from state 1 (normal) to state 16 (0x10 INSERT)l


