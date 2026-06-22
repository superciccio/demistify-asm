---
title: "Before Assembly: Switches, Cards, and Raw Numbers"
order: 1
difficulty: beginner
arch: history
---

Long before anyone typed `mov` or `addi`, programming meant *being* the
compiler — in your head, on paper, with numbers.

## Programming the hard way

The earliest stored-program computers had no language at all. To run a program
you fed the machine **opcodes** directly: numeric codes the CPU was wired to
recognize. On machines like the **EDSAC** (1949) or the **IAS machine**,
a programmer would:

1. Work out the algorithm by hand.
2. Translate each step into the machine's numeric instruction format.
3. Enter those numbers — via punched paper tape, punch cards, or literally
   **toggling switches** on a front panel, one bit at a time.

A single mistake meant hunting through columns of octal or decimal by eye.

> The machine never understood "add these two numbers." It understood
> *"the bit pattern that, when decoded, drives the adder."* Everything human
> about the program lived only in the programmer's notes.

## Why this couldn't last

Two problems made raw machine code untenable as programs grew:

- **Addresses were absolute.** Insert one instruction near the top and every
  jump target below it shifted — you re-computed addresses by hand.
- **Numbers carry no meaning.** `00110010` tells you nothing; you had to
  *remember* that it meant "load." Code was unreadable an hour after writing it.

The fix was almost obvious in hindsight: let the human write **names**, and let
the *machine* do the bookkeeping of turning names into numbers. That idea — a
program that assembles your symbolic instructions into machine code — is where
**assembly language** begins.

## What to take away

- Machine code is the CPU's native tongue: pure numbers.
- Assembly is a thin, human-readable *naming* layer over that — not a different
  language so much as a notation.
- The motivation was never speed of execution; it was speed and safety of
  *authoring*.

In the next lesson we'll meet the first assemblers and the mnemonics that are
still recognizable in today's code.
