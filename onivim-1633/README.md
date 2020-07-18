Details

Issue
https://github.com/onivim/oni2/issues/1633

# Pull requests and commits

[Unit test updates reproducing the problem](https://github.com/onivim/libvim/pull/215)

# Context
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
2  | High       | Unknown | I and c have slightly different paths.

## Issue is within libvim, not vim
Test cases confirm, creating pull request to improve unit test coverage before diving into libvim.

## I and c have slightly different paths
Is this within the editor or within the libvim?
Testcases within libvim, let’s look at them when we have it building.


# Extra Data Needed
Architecture/event model.
Scratch Notes
Libvim ! = neovm

