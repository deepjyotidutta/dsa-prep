import { useState } from "react";

const sections = [
  {
    id: "arrays",
    title: "1. Arrays (Lists in Python)",
    color: "#0f3460",
    content: [
      {
        type: "text",
        body: `In Python, the built-in list is your array. It's a dynamic array — it resizes automatically, stores any type, and gives you O(1) access by index.`
      },
      {
        type: "code",
        label: "Core Operations",
        code: `# Create
nums = [3, 1, 4, 1, 5, 9]

# Access — O(1)
print(nums[0])       # 3
print(nums[-1])      # 9  (last element)

# Slice — O(k)
print(nums[1:4])     # [1, 4, 1]

# Append — O(1) amortized
nums.append(2)

# Insert at index — O(n)
nums.insert(2, 99)

# Remove by value — O(n)
nums.remove(99)

# Pop last — O(1)
nums.pop()

# Length
print(len(nums))     # 6

# Iterate
for n in nums:
    print(n)

# Enumerate (index + value)
for i, n in enumerate(nums):
    print(i, n)`
      },
      {
        type: "callout",
        kind: "tip",
        body: "Interview signal: Always say 'I'll use a list here because access is O(1) and appending is amortized O(1).' Interviewers love when you name complexity unprompted."
      },
      {
        type: "complexity",
        rows: [
          ["Access by index", "O(1)"],
          ["Search (unsorted)", "O(n)"],
          ["Append", "O(1) amortized"],
          ["Insert at index", "O(n)"],
          ["Delete by index", "O(n)"],
        ]
      }
    ]
  },
  {
    id: "strings",
    title: "2. Strings in Python",
    color: "#16213e",
    content: [
      {
        type: "text",
        body: "Strings are immutable sequences of characters. This is a critical interview detail — you CANNOT modify a string in place. Any 'modification' creates a new string."
      },
      {
        type: "code",
        label: "Key String Operations",
        code: `s = "hello world"

# Length
len(s)              # 11

# Access char — O(1)
s[0]                # 'h'
s[-1]               # 'd'

# Slice
s[0:5]              # 'hello'
s[::-1]             # 'dlrow olleh' (reverse)

# Common methods
s.upper()           # 'HELLO WORLD'
s.lower()           # 'hello world'
s.split()           # ['hello', 'world']
s.split(',')        # split on comma
s.strip()           # remove leading/trailing whitespace
s.replace('l','x')  # 'hexxo worxd'

# Check content
s.isalnum()         # True if all letters/digits
s.isalpha()         # True if all letters
s.isdigit()         # True if all digits

# Join list into string
words = ['a', 'b', 'c']
'-'.join(words)     # 'a-b-c'
''.join(words)      # 'abc'

# String is iterable
for ch in s:
    print(ch)

# Slicing creates new string (immutable!)
s2 = s             # both point to same object
# s[0] = 'H'       # ❌ TypeError — strings are immutable!`
      },
      {
        type: "callout",
        kind: "warn",
        body: "Building a string with += in a loop is O(n²) because each += creates a new string. Use a list to collect chars, then ''.join() at the end — that's O(n)."
      },
      {
        type: "code",
        label: "Efficient String Building",
        code: `# ❌ Slow — O(n²)
result = ""
for ch in ['a','b','c','d']:
    result += ch

# ✅ Fast — O(n)
parts = []
for ch in ['a','b','c','d']:
    parts.append(ch)
result = "".join(parts)`
      }
    ]
  },
  {
    id: "hashmap",
    title: "3. HashMaps (dict) & HashSets (set)",
    color: "#e94560",
    content: [
      {
        type: "text",
        body: "In Python, dict is your HashMap. It maps unique keys to values in O(1) average time for get/set/delete. set is your HashSet — unique elements only, O(1) membership check."
      },
      {
        type: "code",
        label: "dict — HashMap",
        code: `# Create
freq = {}
freq = dict()
freq = {"a": 1, "b": 2}

# Set / update — O(1)
freq["c"] = 3
freq["a"] += 1

# Get — O(1)
freq["a"]           # 2 (KeyError if missing!)
freq.get("z")       # None (safe)
freq.get("z", 0)    # 0  (default value)

# Check key exists — O(1)
"a" in freq         # True

# Delete — O(1)
del freq["b"]
freq.pop("c", None) # safe delete with default

# Iterate
for key in freq:            # keys
    print(key)

for val in freq.values():   # values
    print(val)

for k, v in freq.items():   # both
    print(k, v)

# Useful: defaultdict avoids KeyError
from collections import defaultdict
freq2 = defaultdict(int)    # default value = 0
freq2["x"] += 1             # no KeyError!

# Useful: Counter — count frequencies in one line
from collections import Counter
s = "aabbcca"
cnt = Counter(s)    # Counter({'a': 3, 'b': 2, 'c': 2})
cnt.most_common(2)  # [('a', 3), ('b', 2)]`
      },
      {
        type: "code",
        label: "set — HashSet",
        code: `# Create
seen = set()
seen = {1, 2, 3}

# Add — O(1)
seen.add(4)

# Check membership — O(1)  ← KEY interview use case
4 in seen           # True
5 in seen           # False

# Remove — O(1)
seen.remove(4)      # KeyError if missing
seen.discard(99)    # safe — no error

# Set operations
a = {1, 2, 3}
b = {2, 3, 4}
a & b   # intersection → {2, 3}
a | b   # union        → {1, 2, 3, 4}
a - b   # difference   → {1}`
      },
      {
        type: "callout",
        kind: "tip",
        body: "HashMap vs HashSet: Use dict when you need to store associated data (key → value). Use set when you only need to track existence — e.g., 'have I seen this number before?'"
      },
      {
        type: "complexity",
        rows: [
          ["Get / Set / Delete", "O(1) average"],
          ["Search (key in dict)", "O(1) average"],
          ["Iterate all keys", "O(n)"],
          ["set membership", "O(1) average"],
        ]
      }
    ]
  },
  {
    id: "patterns",
    title: "4. Day 1 Problem Patterns",
    color: "#27ae60",
    content: [
      {
        type: "text",
        body: "Now let's connect all three structures to your Day 1 problems. Every pattern below appears directly in Two Sum, Best Time to Buy Stock, and Contains Duplicate."
      },
      {
        type: "code",
        label: "Two Sum — HashMap pattern",
        code: `# LC #1 — Two Sum
# Find indices of two numbers that add up to target.
# Key insight: for each num, check if (target - num) exists.

def twoSum(nums, target):
    seen = {}  # value → index

    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:        # O(1) lookup
            return [seen[complement], i]
        seen[num] = i                 # store for future

    return []

# Time: O(n)  |  Space: O(n)
# Without HashMap it would be O(n²) — nested loops`
      },
      {
        type: "code",
        label: "Contains Duplicate — HashSet pattern",
        code: `# LC #217 — Contains Duplicate
# Return True if any value appears at least twice.

def containsDuplicate(nums):
    seen = set()
    for n in nums:
        if n in seen:     # O(1) — already encountered
            return True
        seen.add(n)
    return False

# Shorter version (but slightly less efficient — builds whole set first):
def containsDuplicate_v2(nums):
    return len(nums) != len(set(nums))

# Time: O(n)  |  Space: O(n)`
      },
      {
        type: "code",
        label: "Best Time to Buy & Sell Stock — Array / Two-pass",
        code: `# LC #121 — Best Time to Buy and Sell Stock
# Find max profit from one buy + one sell (buy before sell).

def maxProfit(prices):
    min_price = float('inf')
    max_profit = 0

    for price in prices:
        if price < min_price:
            min_price = price           # update cheapest buy
        elif price - min_price > max_profit:
            max_profit = price - min_price  # update best profit

    return max_profit

# Time: O(n)  |  Space: O(1)
# Key trick: track the minimum seen SO FAR as you scan left to right.
# At each price, ask: "if I sell today, what's my profit?"`
      }
    ]
  },
  {
    id: "quiz",
    title: "5. Day 1 Quick Quiz",
    color: "#8e44ad",
    content: [
      { type: "quiz" }
    ]
  }
];

const quizData = [
  {
    q: "What is the time complexity of looking up a key in a Python dict?",
    options: ["O(log n)", "O(n)", "O(1) average", "O(n²)"],
    answer: 2,
    explain: "Python dicts are hash tables — average O(1) for get, set, and delete."
  },
  {
    q: "Why can't you do s[0] = 'H' on a Python string?",
    options: ["Strings don't support indexing", "Strings are immutable — you can only create new strings", "You need to use s.replace()", "Python strings are stored as linked lists"],
    answer: 1,
    explain: "Strings in Python are immutable. Any change creates a new string object."
  },
  {
    q: "You want to check if a number was seen before in a stream. Which structure is most efficient?",
    options: ["list (scan each time)", "set (O(1) lookup)", "dict (store index too)", "sorted list + binary search"],
    answer: 1,
    explain: "set gives O(1) membership check. Use dict only if you also need to store associated data (like an index)."
  },
  {
    q: "In Two Sum, why do we use a HashMap instead of a nested loop?",
    options: [
      "Nested loops are always wrong",
      "HashMap gives O(1) lookup so we go from O(n²) to O(n)",
      "Lists can't store duplicates",
      "HashMap uses less memory"
    ],
    answer: 1,
    explain: "The nested loop checks every pair — O(n²). With a HashMap, for each number we check if its complement exists in O(1), making the whole pass O(n)."
  },
  {
    q: "What does ''.join(['a','b','c']) return?",
    options: ["['a','b','c']", "'a b c'", "'abc'", "Error"],
    answer: 2,
    explain: "join() concatenates list elements using the separator string. Empty string separator produces 'abc'."
  }
];

function ComplexityTable({ rows }) {
  return (
    <div style={{ overflowX: "auto", margin: "10px 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
        <thead>
          <tr style={{ background: "#0f3460", color: "#fff" }}>
            <th style={{ padding: "8px 12px", textAlign: "left" }}>Operation</th>
            <th style={{ padding: "8px 12px", textAlign: "left" }}>Complexity</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([op, cmp], i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#f5f7ff" : "#fff" }}>
              <td style={{ padding: "7px 12px", borderBottom: "1px solid #dde3f0" }}>{op}</td>
              <td style={{ padding: "7px 12px", borderBottom: "1px solid #dde3f0", fontWeight: 700, color: "#e94560", fontFamily: "monospace" }}>{cmp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CodeBlock({ label, code }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div style={{ margin: "12px 0" }}>
      {label && <div style={{ fontSize: "12px", fontWeight: 700, color: "#666", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</div>}
      <div style={{ position: "relative", background: "#1a1a2e", borderRadius: "8px", overflow: "hidden" }}>
        <button onClick={copy} style={{ position: "absolute", top: "8px", right: "10px", background: copied ? "#27ae60" : "#333", color: "#fff", border: "none", borderRadius: "4px", padding: "3px 10px", fontSize: "11px", cursor: "pointer" }}>
          {copied ? "Copied!" : "Copy"}
        </button>
        <pre style={{ margin: 0, padding: "16px 14px", paddingRight: "70px", overflowX: "auto", color: "#e0e0e0", fontFamily: "'Courier New', monospace", fontSize: "12.5px", lineHeight: "1.7" }}>
          {code}
        </pre>
      </div>
    </div>
  );
}

function Callout({ kind, body }) {
  const styles = {
    tip: { bg: "#eafaf1", border: "#27ae60", icon: "💡", label: "Interview Tip" },
    warn: { bg: "#fef9e7", border: "#f39c12", icon: "⚠️", label: "Watch Out" },
  };
  const s = styles[kind] || styles.tip;
  return (
    <div style={{ background: s.bg, borderLeft: `4px solid ${s.border}`, borderRadius: "0 8px 8px 0", padding: "12px 16px", margin: "12px 0" }}>
      <div style={{ fontWeight: 700, fontSize: "12px", marginBottom: "4px" }}>{s.icon} {s.label}</div>
      <div style={{ fontSize: "13.5px" }}>{body}</div>
    </div>
  );
}

function QuizSection() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = submitted ? quizData.filter((q, i) => answers[i] === q.answer).length : 0;

  return (
    <div>
      {quizData.map((q, qi) => (
        <div key={qi} style={{ background: "#fafbff", border: "1.5px solid #c5cce8", borderRadius: "8px", padding: "14px 16px", marginBottom: "14px" }}>
          <div style={{ fontWeight: 600, marginBottom: "10px", fontSize: "14px" }}>Q{qi + 1}. {q.q}</div>
          {q.options.map((opt, oi) => {
            let bg = "#fff";
            let border = "1px solid #ddd";
            if (submitted) {
              if (oi === q.answer) { bg = "#eafaf1"; border = "2px solid #27ae60"; }
              else if (answers[qi] === oi && oi !== q.answer) { bg = "#fdedec"; border = "2px solid #e74c3c"; }
            } else if (answers[qi] === oi) {
              bg = "#e8eeff"; border = "2px solid #0f3460";
            }
            return (
              <div key={oi} onClick={() => !submitted && setAnswers(a => ({ ...a, [qi]: oi }))}
                style={{ background: bg, border, borderRadius: "6px", padding: "8px 12px", marginBottom: "6px", cursor: submitted ? "default" : "pointer", fontSize: "13.5px", transition: "all 0.15s" }}>
                {opt}
              </div>
            );
          })}
          {submitted && (
            <div style={{ marginTop: "8px", fontSize: "12.5px", color: "#555", background: "#f0f4ff", padding: "8px 12px", borderRadius: "6px" }}>
              <strong>Explanation:</strong> {q.explain}
            </div>
          )}
        </div>
      ))}
      {!submitted ? (
        <button onClick={() => setSubmitted(true)} disabled={Object.keys(answers).length < quizData.length}
          style={{ background: Object.keys(answers).length < quizData.length ? "#ccc" : "#0f3460", color: "#fff", border: "none", padding: "12px 28px", borderRadius: "8px", fontSize: "14px", cursor: Object.keys(answers).length < quizData.length ? "not-allowed" : "pointer", width: "100%" }}>
          Submit Answers ({Object.keys(answers).length}/{quizData.length} answered)
        </button>
      ) : (
        <div style={{ textAlign: "center", padding: "18px", borderRadius: "10px", background: score >= 4 ? "#eafaf1" : "#fef9e7", border: `2px solid ${score >= 4 ? "#27ae60" : "#f39c12"}` }}>
          <div style={{ fontSize: "28px", fontWeight: 800 }}>{score}/{quizData.length}</div>
          <div style={{ fontWeight: 600, marginTop: "4px" }}>{score >= 4 ? "✅ Ready for Day 1 problems!" : "⚠️ Review the sections above before solving"}</div>
          <button onClick={() => { setAnswers({}); setSubmitted(false); }}
            style={{ marginTop: "12px", background: "#0f3460", color: "#fff", border: "none", padding: "8px 20px", borderRadius: "6px", cursor: "pointer", fontSize: "13px" }}>
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("arrays");

  const activeSection = sections.find(s => s.id === active);

  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", maxWidth: "800px", margin: "0 auto", padding: "0 0 40px" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0f3460 0%, #16213e 60%, #e94560 100%)", color: "#fff", padding: "28px 24px 22px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, opacity: 0.7, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>Day 1 · Week 1 · FAANG+ Prep</div>
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 800 }}>Arrays, Strings & HashMaps</h1>
        <div style={{ marginTop: "8px", opacity: 0.8, fontSize: "13px" }}>🎯 Problems today: Two Sum #1 · Best Time to Buy Stock #121 · Contains Duplicate #217</div>
      </div>

      {/* Nav tabs */}
      <div style={{ display: "flex", overflowX: "auto", background: "#f0f4ff", borderBottom: "2px solid #dde3f0" }}>
        {sections.map(s => (
          <button key={s.id} onClick={() => setActive(s.id)}
            style={{ flex: "0 0 auto", padding: "12px 16px", background: active === s.id ? s.color : "transparent", color: active === s.id ? "#fff" : "#333", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "12.5px", whiteSpace: "nowrap", transition: "all 0.2s", borderBottom: active === s.id ? `3px solid ${s.color}` : "3px solid transparent" }}>
            {s.title.split('.')[0]}. {s.title.split('. ')[1]?.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Section content */}
      <div style={{ padding: "20px 20px" }}>
        <h2 style={{ color: activeSection.color, fontSize: "17px", marginTop: 0, paddingBottom: "8px", borderBottom: `3px solid ${activeSection.color}` }}>
          {activeSection.title}
        </h2>
        {activeSection.content.map((block, i) => {
          if (block.type === "text") return <p key={i} style={{ fontSize: "14px", lineHeight: 1.7, color: "#333" }}>{block.body}</p>;
          if (block.type === "code") return <CodeBlock key={i} label={block.label} code={block.code} />;
          if (block.type === "callout") return <Callout key={i} kind={block.kind} body={block.body} />;
          if (block.type === "complexity") return <ComplexityTable key={i} rows={block.rows} />;
          if (block.type === "quiz") return <QuizSection key={i} />;
          return null;
        })}
      </div>

      {/* Bottom nav */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "0 20px", marginTop: "10px" }}>
        {sections.findIndex(s => s.id === active) > 0
          ? <button onClick={() => setActive(sections[sections.findIndex(s => s.id === active) - 1].id)}
              style={{ background: "#f0f4ff", border: "1px solid #dde3f0", padding: "10px 18px", borderRadius: "6px", cursor: "pointer", fontSize: "13px", fontWeight: 600 }}>
              ← Previous
            </button>
          : <div />}
        {sections.findIndex(s => s.id === active) < sections.length - 1
          ? <button onClick={() => setActive(sections[sections.findIndex(s => s.id === active) + 1].id)}
              style={{ background: "#0f3460", color: "#fff", border: "none", padding: "10px 18px", borderRadius: "6px", cursor: "pointer", fontSize: "13px", fontWeight: 600 }}>
              Next →
            </button>
          : <div />}
      </div>
    </div>
  );
}
