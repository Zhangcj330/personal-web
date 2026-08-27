"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import "./BrickAiChat.css";

type CardType = "market" | "grants";

type ChatItem =
  | {
      id: string;
      kind: "message";
      from: "ai" | "user";
      text: string;
      card?: CardType;
    }
  | {
      id: string;
      kind: "typing";
      from: "ai";
    };

type SequenceEvent = {
  delay: number;
  action:
    | { type: "append"; item: ChatItem }
    | { type: "replace-typing"; item: ChatItem }
    | { type: "reset" };
};

const initialMessages: ChatItem[] = [
  {
    id: "welcome",
    kind: "message",
    from: "ai",
    text: "Hi! I'm Brick. What home are you looking for?",
  },
];

const sequence: SequenceEvent[] = [
  {
    delay: 900,
    action: {
      type: "append",
      item: {
        id: "search",
        kind: "message",
        from: "user",
        text: "3 bed in Dee Why, budget $2M",
      },
    },
  },
  {
    delay: 450,
    action: {
      type: "append",
      item: { id: "typing-search", kind: "typing", from: "ai" },
    },
  },
  {
    delay: 1400,
    action: {
      type: "replace-typing",
      item: {
        id: "market-response",
        kind: "message",
        from: "ai",
        text: "Found 8 matches in Dee Why. Median house price $1.94M — you're right at market. Clearance rate 74%.",
        card: "market",
      },
    },
  },
  {
    delay: 1500,
    action: {
      type: "append",
      item: {
        id: "grants",
        kind: "message",
        from: "user",
        text: "What grants am I eligible for?",
      },
    },
  },
  {
    delay: 450,
    action: {
      type: "append",
      item: { id: "typing-grants", kind: "typing", from: "ai" },
    },
  },
  {
    delay: 1250,
    action: {
      type: "replace-typing",
      item: {
        id: "grants-response",
        kind: "message",
        from: "ai",
        text: "As a NSW first-home buyer you qualify for:",
        card: "grants",
      },
    },
  },
  {
    delay: 1500,
    action: {
      type: "append",
      item: {
        id: "property",
        kind: "message",
        from: "user",
        text: "Is 14 Fisher Rd a good buy?",
      },
    },
  },
  {
    delay: 450,
    action: {
      type: "append",
      item: { id: "typing-property", kind: "typing", from: "ai" },
    },
  },
  {
    delay: 2600,
    action: { type: "reset" },
  },
];

function Message({
  from,
  children,
}: {
  from: "ai" | "user";
  children: ReactNode;
}) {
  return (
    <div className={`flex ${from === "user" ? "justify-end" : "justify-start"}`}>
      <div className="max-w-[85%]">{children}</div>
    </div>
  );
}

function Bubble({
  from,
  children,
}: {
  from: "ai" | "user";
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl px-3 py-2 text-sm leading-snug ${
        from === "user"
          ? "rounded-tr-sm bg-black text-white"
          : "rounded-tl-sm bg-[#f6f6f6] text-black"
      }`}
    >
      {children}
    </div>
  );
}

function DataRows({ type }: { type: CardType }) {
  const rows =
    type === "market"
      ? [
          {
            label: "Suburb median",
            value: <span className="font-bold">$1.94M</span>,
          },
          {
            label: "Clearance rate",
            value: (
              <span className="rounded-full bg-[#e8f5e9] px-2 py-0.5 text-[10px] font-semibold text-[#1b5e20]">
                🔥 Active
              </span>
            ),
          },
          {
            label: "Your budget",
            value: <span className="font-bold">$2.0M</span>,
          },
        ]
      : [
          {
            label: "First Home Buyer Assist",
            value: (
              <span className="rounded-full bg-[#e8f5e9] px-2 py-0.5 text-[10px] font-semibold text-[#1b5e20]">
                ✓ Eligible
              </span>
            ),
          },
          {
            label: "FHOG (new builds)",
            value: <span className="font-bold">$10,000</span>,
          },
          {
            label: "First Home Guarantee",
            value: <span className="font-bold">5% deposit</span>,
          },
        ];

  return (
    <div className="mt-2 overflow-hidden rounded-xl border border-[#eee] bg-white text-xs">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between border-b border-[#eee] px-3 py-2 last:border-0"
        >
          <span className="text-[#6b6b6b]">{row.label}</span>
          {row.value}
        </div>
      ))}
    </div>
  );
}

export default function BrickAiChat() {
  const [messages, setMessages] = useState<ChatItem[]>(initialMessages);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const runSequence = (index: number) => {
      if (cancelled) return;

      const event = sequence[index];
      timeoutRef.current = window.setTimeout(() => {
        if (cancelled) return;

        setMessages((current) => {
          if (event.action.type === "reset") return initialMessages;
          if (event.action.type === "replace-typing") {
            return [...current.filter((item) => item.kind !== "typing"), event.action.item];
          }
          return [...current, event.action.item];
        });

        runSequence((index + 1) % sequence.length);
      }, event.delay);
    };

    runSequence(0);

    return () => {
      cancelled = true;
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const frame = window.requestAnimationFrame(() => {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [messages]);

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/10">
      <div className="flex items-center gap-2 border-b border-[#eee] px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        <span className="text-xs font-semibold">Brick AI</span>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex h-[480px] scroll-smooth flex-col gap-3 overflow-y-auto p-5"
      >
        {messages.map((message) =>
          message.kind === "typing" ? (
            <Message key={message.id} from="ai">
              <div className="flex gap-1 rounded-2xl rounded-tl-sm bg-[#f6f6f6] px-3 py-3">
                <span className="brick-chat-dot" />
                <span className="brick-chat-dot" />
                <span className="brick-chat-dot" />
              </div>
            </Message>
          ) : (
            <Message key={message.id} from={message.from}>
              <Bubble from={message.from}>{message.text}</Bubble>
              {message.card && <DataRows type={message.card} />}
            </Message>
          ),
        )}
      </div>

      <div className="border-t border-[#eee] px-4 py-3">
        <div className="rounded-full bg-[#f6f6f6] px-4 py-2 text-sm text-[#afafaf]">
          Ask about any suburb or property…
        </div>
      </div>
    </div>
  );
}
