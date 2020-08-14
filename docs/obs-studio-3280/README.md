
#  Elgato HD60 S+ macOS shows poor performance.

[obsproject/obs-studio#3280](https://github.com/obsproject/obs-studio/issues/3280)

When using the  Elgato HD60 S+ on macOS the performance of
the stream is horrific.  When not streaming, frame rendering takes approximately 20-30ms, and when streaming takes an extra 10-20 ms.

The performance with the HD60 S+ is *much* worse than Display Capture.  Display capture seems to be able to handle any size screen, while HD60 is unable to stream even a 720p30 screen without choking up most of the CPU.

# Preparation

With HD60 S+ connected, add a source with the HD60 S+.

# Issue Reproduction

_This section is a descriptive overview of how to get to reproducing the problem._

# Hypotheses

_This section is a descriptive collection of ideas that need either proof or refutation.  The short code includes is used int eh diagnosis flow, the hypothesis is a description of the potential cause.  The proof point provides a method for either proving or disproving the hypothesis._

| Shortcode             | Hypothesis                                                      | Proof Point |
| --------------------- | --------------------------------------------------------------- | ----------- |
| abc        | abc is not working                                 |             |
| def        | def is not working                          |             |
| ghi   | ghi needs a doohickey |             |
| jkl | jkl is old                     |             |
| mno   | mno is ot compiled properly      |             |

## Diagnosis flow

_This section represents a decision tree in how to debug and diagnose the problem.
The details are captured in the the table above, and are structured in a flow
diagram below._

_This section is intended to evolve as the consideration what to consider debugging are
determined.  Each node should either be carried (default color), proven (green), or
refuted (red).  The analysis and proof or refutation should be captured below in the worklog below._

```mermaid
graph TD
  style abc fill:lightgreen
  style def  fill:lightgreen
  style ghi fill:lightgreen
  style jkl fill:pink
  style mno fill:pink
  style pqr fill:lightgreen

  abc --> def
  def --> ghi
  ghi --> jkl
  ghi --> mno
  ghi --> pqr

  pqr-->stu

```

# Narrative Summary of Issue

_**Not a Bug** Not implemented yet._

_This section summarizes the narrative of the issue.  The section should lead
in with a status that will frame this section._


# Links, Pull Requests or other issues

_This section summarizes the links, pull requests and other outcomes for the debugging session._


# Scratch Notes

_This section is the "live log" of livedebug, including the summary of each day's
activity._

## 20200723

## 20200723
