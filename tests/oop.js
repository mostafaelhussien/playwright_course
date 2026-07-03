/* ============================================================================
   OOP CHEAT SHEET — basics7.js & basics8.js, FOREVER VERSION
   Paste this comment above either file any time the concepts fade.
   ============================================================================

   THE 5 PIECES, IN THE ORDER THEY ALWAYS HAPPEN:


   1) new  →  "ORDERS A BLANK CANVAS"
      ------------------------------------------------------------
      new Person("Tim","Joseph")
      Creates ONE blank, nameless shape. Nothing is filled in yet.
      This is the FIRST thing that happens, before anything else runs.


   2) constructor  →  "THE PAINTER WHO IMMEDIATELY STARTS PAINTING"
      ------------------------------------------------------------
      constructor(firstName,lastName) {
          this.firstName = firstName
          this.lastName  = lastName
      }
      Runs AUTOMATICALLY, exactly once, the instant "new" finishes making
      the blank canvas. Its only job: fill that specific blank in with
      real values. Written ONCE in the class, but FIRES fresh every
      single time "new" is used.


   3) this  →  "WHOEVER'S LEFT OF THE DOT, RIGHT NOW"
      ------------------------------------------------------------
      person.fullName()   ->  this = person   (because "person" sits left of the dot)

      Inside a constructor specifically:
      this = "the exact blank canvas currently being painted, this call only."
      Different "new" call = different blank canvas = this points somewhere
      new each time. Never fixed, never the same thing twice.


   4) get (a GETTER)  →  "A DIGITAL LABEL THAT REDRAWS ITSELF LIVE"
      ------------------------------------------------------------
      get location() { return "canada" }

      Read it like a property — NO PARENTHESES EVER:
          person.location        ✅ correct
          person.location()      ❌ crashes — "is not a function"

      Stores NOTHING. Recalculates the answer FRESH every single time
      you read it. (Proof: change a value the getter depends on, read
      it again, the answer updates itself with zero extra code.)


   5) METHOD (no return)  →  "PRINTS, THEN HANDS BACK NOTHING"
      ------------------------------------------------------------
      fullName() { console.log(this.firstName+this.lastName) }

      Needs parentheses to run: person.fullName()
      No "return" statement = automatically hands back undefined once done.

      THE FAMOUS TRAP:
      console.log(person.fullName())
        line 1 printed FROM INSIDE fullName() -> "TimJoseph"
        line 2 printed BY THE OUTER console.log -> "undefined"
      Two lines, every time, whenever a no-return method gets wrapped
      inside another console.log.


   ============================================================================
   INHERITANCE — basics8.js — THE SAME 5 PIECES, PLUS 2 NEW ONES
   ============================================================================


   6) extends  →  "BORROW THE ENTIRE FAMILY'S HOUSE FOR FREE"
      ------------------------------------------------------------
      class Pet extends Person { ... }

      Pet automatically owns EVERYTHING Person has (age field, location
      getter, constructor, fullName method) — without retyping ANY of
      it. Only write what's NEW or DIFFERENT in the child class.


   7) super(...)  →  "THE PHONE CALL TO THE PARENT'S CONSTRUCTOR"
      ------------------------------------------------------------
      constructor(firstName,lastName) {
          super(firstName,lastName)
      }

      Runs the PARENT's constructor DIRECTLY on the same blank canvas
      currently being built by the child — not a copy, not a transfer
      afterward, the real thing, happening right now, on this object.

      MANDATORY RULE: if a child class writes its OWN constructor, it
      MUST call super(...) before touching "this" anywhere, or JS
      throws an error the instant "new" is used.


   OVERRIDING  →  "MY OWN VERSION WINS, NO QUESTIONS ASKED"
      ------------------------------------------------------------
      Person:  get location() { return "canada" }
      Pet:     get location() { return "BlueCross" }

      pet.location -> "BlueCross"  (Pet's OWN version, not Person's)

      RULE: JS only climbs UP to the parent to borrow something when
      the child has NOTHING of its own with that exact name. The moment
      the child writes its own version, the child's version wins,
      always, automatically.


   ============================================================================
   BONUS — SHARING THE BLUEPRINT BETWEEN FILES
   ============================================================================

   module.exports = class Person {...}   -> "this blueprint is now
                                              available to other files"
   const Person = require('./basics7')   -> "give me that blueprint"

   Like loaning out the cookie cutter itself — only ONE cutter exists,
   any file can borrow it to stamp out their own cookies.


   ============================================================================
   THE ENTIRE basics7.js + basics8.js STORY, IN ONE BREATH
   ============================================================================

   basics7.js builds ONE blueprint (Person): new makes the blank,
   constructor paints it, this points at the current canvas, get
   location() is a live label, fullName() prints with no return.

   basics8.js builds a SECOND blueprint (Pet) that borrows the ENTIRE
   first blueprint for free via extends, calls super() to let Person's
   own constructor do the real painting, and only adds ONE new thing:
   its own location getter, which overrides Person's version.

   That's it. Five pieces, reused twice. Nothing else is hiding in
   either file.
   ============================================================================ */
