#!/usr/bin/env python3
"""Generate the complete notes-individual-c.ts file with unquoted keys."""

import json
import re

# We'll build TS strings directly for each note to maintain unquoted key format
# Python dictionary -> TS object literal with unquoted keys

def js_val(v, indent=0):
    """Convert a Python value to a JS/TS literal string with proper formatting."""
    pad = "  " * indent
    inner = "  " * (indent + 1)
    
    if v is None:
        return "null"
    if isinstance(v, bool):
        return "true" if v else "false"
    if isinstance(v, str):
        # Escape double quotes and backslashes
        escaped = v.replace("\\", "\\\\").replace('"', '\\"')
        return f'"{escaped}"'
    if isinstance(v, (int, float)):
        return str(v)
    if isinstance(v, list):
        if not v:
            return "[]"
        items = []
        for item in v:
            items.append(f"{inner}{js_val(item, indent + 1)}")
        return "[\n" + ",\n".join(items) + f"\n{pad}]"
    if isinstance(v, dict):
        if not v:
            return "{}"
        items = []
        for key, val in v.items():
            items.append(f'{inner}{key}: {js_val(val, indent + 1)}')
        return "{\n" + ",\n".join(items) + f"\n{pad}}}"
    return str(v)

def build_note(note_dict):
    """Build a complete TS note object string."""
    return js_val(note_dict)

def make_block(block_type, **kwargs):
    """Create a block dict with type and other fields."""
    d = {"type": block_type}
    d.update(kwargs)
    return d

def para(text):
    return make_block("para", text=text)

def callout(label, text):
    return make_block("callout", label=label, text=text)

def subheading(text):
    return make_block("subheading", text=text)

def bullets(items):
    return make_block("bullets", items=[{"term": t, "desc": d} for t, d in items])

def quote(text):
    return make_block("quote", text=text)

def stat(value, label, footnote):
    return make_block("stat", value=value, label=label, footnote=footnote)

def output(text):
    return make_block("output", text=text)

def section(sid, label, icon, blocks):
    return {
        "id": sid,
        "label": label,
        "icon": icon,
        "badge": None,
        "content": "",
        "blocks": blocks
    }

notes = []

# ============================================================
# NOTE 1: user-flow
# ============================================================
notes.append({
    "id": "user-flow",
    "themeId": "violet",
    "title": "User Flow and Task Flow",
    "subtitle": "Mapping the Path Users Take Through Your Product",
    "wordCount": "~2,400 words",
    "tags": ["User Flow", "Task Flow", "UX Design", "Navigation"],
    "sections": [
        section("user-flow-1", "Foundations of User and Task Flows", "plus", [
            para("A user flow is a visual diagram that maps the complete path a user takes through a product to accomplish a specific goal. It captures every step, decision point, interaction, and emotional state from entry to exit. Task flows are a narrower variant that focus on a single, atomic task without the broader context of the surrounding experience. Both are essential tools in the UX designer toolkit for understanding and optimizing how users navigate digital products. User flows answer the question of what the complete experience looks like, while task flows answer how a specific action works in isolation."),
            para("The fundamental difference between user flows and task flows lies in scope. A user flow encompasses the entire journey, including multiple tasks, emotional states, and cross page navigation. A task flow focuses exclusively on the specific steps required to complete one discrete task, such as resetting a password or adding an item to a cart. User flows are broad and holistic, capturing the complete experience across multiple screens and emotional states. They are best used when you need to understand the overall journey, identify pain points across the experience, or communicate the big picture to stakeholders."),
            para("Understanding when to use each type is a critical skill for UX designers. Each serves a distinct purpose and choosing the wrong type can lead to either overwhelming detail or insufficient context. The decision depends on what question you need to answer and who will use the diagram. User flows are for cross functional stakeholders and strategic alignment, while task flows are primarily for designers and developers who need detailed, step by step guidance. In practice, teams start with user flows to map the complete journey and identify which parts need detailed optimization, then create task flows for each critical task within the user flow."),
            callout("Why Flows Matter", "User and task flows transform abstract user goals into concrete, step by step journeys. They reveal gaps in navigation, expose unnecessary steps, and ensure the product guides users efficiently toward their objectives. Without flows, designers risk building interfaces that look good but fail to support real user tasks. Flow analysis is one of the highest leverage activities in the design process, catching structural issues before any screens are built."),
            subheading("Core Components of Flows"),
            bullets([
                ("Entry Point", "The starting location where a user begins their journey, which could be a homepage, landing page, search result, push notification, email link, or external referral. Entry points set expectations and establish the initial context for the user task. Different entry points may require different flow variations, so every flow must account for where users actually come from, not where you assume they start."),
                ("Decision Points", "Points in the flow where users must make a choice, such as selecting an option from a menu, confirming an action, or choosing between alternative paths. Each decision point introduces branches in the flow that must be accounted for. The complexity of decision points directly impacts user effort and error rates, making them critical areas for simplification."),
                ("Actions", "The specific interactions users perform to progress through the flow, including clicking buttons, filling forms, swiping, tapping, or speaking commands. Each action should be intentional and clearly communicated through affordances. Actions represent the atomic units of user effort, and reducing the number of required actions is a primary goal of flow optimization."),
                ("Endpoints", "The final destination of a flow, which represents successful task completion, a dead end, or an exit. Common endpoints include a confirmation page, a success message, or an error screen. Every flow should end with a clear confirmation of completion, and failing to define what success looks like is one of the most common flow design mistakes."),
                ("Error States", "Alternative paths that handle mistakes, invalid inputs, system failures, or network errors. Well designed error states guide users back to the correct path with clear messaging and recovery options. Error states are not edge cases to ignore; they are inevitable paths that every flow must accommodate with dignity."),
                ("Emotional Transitions", "The shifts in user sentiment as they move through the flow, from initial motivation through potential frustration to eventual satisfaction. Mapping emotional states alongside functional steps reveals where users may abandon the process due to confusion, boredom, or anxiety.")
            ]),
            stat("60%", "of usability issues can be identified through flow analysis alone", "Nielsen Norman Group research on usability testing methods")
        ]),
        section("user-flow-2", "Creating and Structuring Flow Diagrams", "tool", [
            para("Creating effective user flows requires a structured approach that begins with understanding user goals and ends with a validated diagram. Designers should base their flows on real user research rather than assumptions about how users behave. A well crafted user flow serves as a blueprint that informs wireframes, prototypes, and final designs. The process is iterative by nature, with early versions rough and incomplete, capturing only the happy path before gradually incorporating edge cases, error states, and alternative paths."),
            para("The first step is to define the primary task the user wants to accomplish and scope the flow accordingly. This step ensures the flow remains focused on its intended purpose. Next, map sequentially by listing every action the user must take from entry to endpoint, using sticky notes or digital boards to organize steps. As understanding deepens, identify decision points that create multiple paths through the flow, ensuring every branch leads somewhere intentional, never to a dead end. Each of these steps builds upon the previous one, creating a progressively more complete picture of the user journey."),
            para("Understanding the standard components and notation used in user flow diagrams is essential for creating flows that are readable and shareable across teams. While there is no single universal standard, most user flows follow conventions adapted from flowcharts and process mapping. Consistent notation ensures anyone on the team can read and contribute without specialized training. Establishing a symbol legend at the start of any user flow project and sharing it with the team is more important than which specific symbols you choose, because consistency in notation is the true driver of communication effectiveness."),
            callout("Notation Consistency", "Establish a symbol legend at the start of any user flow project and share it with the team. Consistency in notation is more important than which specific symbols you choose. Without a shared legend, different team members will interpret the same diagram differently, defeating the purpose of creating a visual communication tool."),
            subheading("Standard Flow Symbols"),
            bullets([
                ("Oval or Pill Shape", "Represents the entry point or starting trigger for the flow. This is where the user journey begins, whether from a URL, an app icon, or external referral. The entry point symbol should always be clearly labeled with the specific trigger or source."),
                ("Rectangle", "Represents a screen, page, or state that the user encounters. Each rectangle should be labeled with the screen name and, where helpful, a brief description of the key action available on that screen."),
                ("Diamond", "Represents a decision point where the user must choose between options. Each branch should be labeled with the choice that triggers it. Decision points are where the most critical design thinking happens, as they determine the branching complexity of the experience."),
                ("Arrow", "Represents the direction of movement from one step to the next. Arrows should follow a consistent direction for readability, typically flowing left to right or top to bottom. Arrow labels can indicate specific triggers or conditions."),
                ("Document Icon", "Represents an output or deliverable generated during the flow, such as a confirmation email, receipt, or generated report. These markers help stakeholders understand what the user receives at each stage."),
                ("Circle Connector", "Used to connect flow segments across multiple pages or to indicate continuation from one part of the diagram to another. Connectors keep complex flows manageable by breaking them into digestible sections.")
            ]),
            quote("A user flow that sits in a design file and is never shared might as well not exist. The value of a flow is proportional to how many people use it to guide decisions. Share early, share often, and invite critique from the whole team."),
            output("Start with user flows to map the complete journey and identify which parts need detailed optimization. Then create task flows for each critical task within the user flow. This layered approach ensures you have both the strategic overview and the tactical detail needed for effective design.")
        ]),
        section("user-flow-3", "Analysis, Testing, and Validation", "check", [
            para("A user flow is only as good as its ability to predict real user behavior. Testing flows with users before any screens are built validates that the mapped path aligns with how users actually think and behave. Flow testing is a lightweight, high impact activity that can be conducted with paper prototypes or simple digital representations. A single round with five users typically reveals 80 percent of critical structural issues, making it one of the most efficient validation methods available to UX designers."),
            para("Task flow analysis is a method for examining the specific steps users take to complete a discrete task. It breaks down complex interactions into atomic actions that can be measured, optimized, and validated. The granularity of task flow analysis makes it ideal for performance optimization. By measuring the time, effort, and error rate for each step, designers can pinpoint exactly where the experience breaks down and target improvements with precision. This transforms subjective design opinions into objective measurements that guide evidence based decision making."),
            para("Several testing methods reveal different aspects of flow quality. Flow walkthroughs present the flow to users and ask them to describe what they would do at each step, revealing mismatches between designer expectations and user mental models. Reverse card sorting asks users to arrange flow steps into the order they would expect, then compares to the designed flow. A/B flow testing creates two alternative flows for the same task and measures which one users complete faster and with fewer errors. Expert reviews by experienced UX professionals identify issues against established usability heuristics."),
            callout("Test Early, Test Often", "Flow testing is one of the highest leverage activities in the design process. It catches structural issues when they are cheapest to fix, before any screens are designed or code is written. A single round with five participants typically reveals the majority of critical issues. Do not wait until you have polished wireframes to test your flows."),
            subheading("Testing Methods"),
            bullets([
                ("Flow Walkthroughs", "Present the flow to users and ask them to describe what they would do at each step. This reveals mismatches between designer expectations and user mental models. Walkthroughs are quick to conduct and require no special equipment."),
                ("Reverse Card Sorting", "Ask users to arrange flow steps into the order they would expect, then compare to the designed flow. This reveals unexpected mental models and helps identify whether your flow matches user intuition."),
                ("A/B Flow Testing", "Create two alternative flows for the same task and measure which one users complete faster and with fewer errors. A/B testing removes subjectivity from flow comparison."),
                ("Expert Review", "Have experienced UX professionals review the flow against established usability heuristics. Expert reviews catch issues quickly but should be combined with user testing for comprehensive validation."),
                ("Step Counting", "Count the number of steps required to complete a task and compare against benchmarks. Fewer steps generally correlate with higher completion rates and lower cognitive load."),
                ("Error Rate Tracking", "Record where and how often users make errors at each step. High error rates at specific steps indicate design problems needing attention, often revealing confusing labels or missing affordances.")
            ]),
            stat("85%", "of critical flow issues found through testing with 5 users", "Nielsen Norman Group research on usability testing sample sizes")
        ]),
        section("user-flow-4", "Tools, Techniques, and Collaboration", "search", [
            para("A wide range of tools are available for creating user and task flows, from simple pen and paper to sophisticated digital platforms. The best tool depends on team size, project complexity, and fidelity requirements. Many designers use a combination of tools throughout the design process, starting with low fidelity paper sketches for rapid exploration and moving to digital tools for refinement and sharing. The best tool for user flows minimizes friction between having an idea and making it visible, and if a learning curve prevents you from mapping flows, it is the wrong tool for the job."),
            para("Digital tools offer significant advantages for team collaboration and version management. Figma has become the industry standard with flow arrow plugins and component libraries specifically designed for user flow creation, and its collaborative features make it ideal for team based flow mapping on distributed teams. Miro excels as a digital whiteboard platform for collaborative flow mapping sessions, particularly for remote teams that need real time synchronous collaboration. Whimsical offers a lightweight, browser based tool designed specifically for flowcharts and wireframes with a clean, distraction free interface."),
            para("Collaborative flow mapping brings together diverse perspectives that produce more robust flows. When designers, developers, product managers, and researchers map flows together, they surface assumptions, identify blind spots, and build shared understanding. The resulting flows reflect a more complete view of the user experience because they incorporate technical constraints, business requirements, and user research insights simultaneously. This cross functional collaboration also builds buy in for the resulting design direction, reducing friction in later stages of the process."),
            callout("Tool Selection Tip", "The best tool for user flows minimizes friction between having an idea and making it visible. If a learning curve prevents you from mapping flows, it is the wrong tool. The skill of flow mapping is independent of the tool, so choose based on what enables the most productive thinking and sharing for your team."),
            subheading("Popular Flow Mapping Tools"),
            bullets([
                ("Figma", "Industry standard design tool with flow arrow plugins and component libraries for user flow creation. Its real time collaboration features make it ideal for team based flow mapping across distributed teams. Auto layout and component variants support consistent, reusable flow elements."),
                ("Miro", "Digital whiteboard platform that excels at collaborative flow mapping sessions. Particularly effective for remote teams with its infinite canvas, sticky notes, and voting features for asynchronous collaboration."),
                ("Whimsical", "Lightweight, browser based tool designed specifically for flowcharts and wireframes. Offers a clean, distraction free interface with built in flow shapes and smart connectors."),
                ("Overflow", "Specialized tool for creating user flow diagrams from design screens. Supports presentation mode for stakeholder walkthroughs and integrates with Figma and Sketch."),
                ("Pen and Paper", "The fastest and most flexible option for early exploration. Paper flows can be created anywhere without any learning curve, making them ideal for early stage divergent thinking and individual ideation."),
                ("Sketch", "Mac native design tool with a robust plugin ecosystem for flow mapping. Its symbol system allows creating reusable flow components that maintain consistency across complex diagrams.")
            ]),
            quote("The best tool for user flows minimizes friction between having an idea and making it visible. If a learning curve prevents you from mapping flows, it is the wrong tool. Master the technique, not the software."),
            stat("67%", "of designers use Figma for flow and diagram creation", "UX Tools survey on design tool usage, 2024")
        ]),
        section("user-flow-5", "Best Practices and Common Mistakes", "refresh", [
            para("Even experienced designers make predictable mistakes when creating user flows. Recognizing these common pitfalls helps teams produce flows that genuinely improve the design process. The most effective flows balance completeness with clarity, providing enough detail to guide decisions without becoming so complex that they overwhelm readers. A flow that tries to show everything at once shows nothing clearly, and complex flows should be broken into sub flows that each tell a focused story about one aspect of the user journey."),
            para("Flow best practices center on user centered thinking and iterative refinement. Base flows on real user research, validate with actual users, and treat flows as living documents that evolve as understanding deepens. A user flow that is never tested with users is essentially an untested hypothesis dressed up as a diagram. Similarly, a flow that is never updated becomes a source of misinformation as the product and understanding evolve. Establish a cadence for reviewing and updating flows, particularly after usability testing reveals new insights about user behavior."),
            para("The relationship between flows and the broader design process is critical. Flows should inform wireframes, which should inform prototypes, which should inform development, with each stage referencing back to the flow to ensure alignment. When a usability test reveals a problem, the first place to look is the flow, because structural issues at the flow level cannot be fixed with better visual design or more polished code. The flow is the foundation, and a flawed foundation cannot support a quality structure regardless of how beautiful the finishing touches are."),
            subheading("Common Flow Design Mistakes"),
            bullets([
                ("Mapping Only the Happy Path", "The most common mistake is designing only for ideal conditions. Real users make errors, change their minds, and encounter failures. Every flow must account for alternative paths, error states, and edge cases that reflect real world usage patterns."),
                ("Too Much Detail Too Early", "Starting with pixel level screen representations instead of high level steps buries the team in detail before the structure is validated. Begin with coarse steps and add detail only after the basic structure is confirmed through testing."),
                ("Ignoring Entry Points", "Assuming all users start at the same place ignores the reality of diverse access patterns. Different entry points may require different flow variations, and failing to account for this creates flows that only serve a subset of users."),
                ("No Clear Endpoint", "Failing to define what success looks like leaves users uncertain about whether they have completed their task. Every flow should end with a clear confirmation of completion that provides closure and a path forward."),
                ("Overcomplicating the Diagram", "Including too many branches and annotations in a single diagram destroys clarity. Complex flows should be broken into sub flows, each focusing on a specific scenario or user goal."),
                ("Designing in Isolation", "Creating flows without input from developers, content strategists, and researchers misses critical constraints and insights. Collaborative flow creation produces more robust and actionable diagrams.")
            ]),
            callout("Progress Over Perfection", "Your first flow will not be perfect. Start rough, share early, and iterate based on feedback. The best flows emerge through repeated cycles of creation, testing, and refinement. A good flow today is better than a perfect flow next month."),
            quote("A user flow is not a deliverable. It is a tool for thinking and communicating. If it is not generating productive conversations, revealing insights, or guiding decisions, you are using it wrong. The value is in the thinking it produces, not the diagram itself."),
            output("The most effective user flows are grounded in research, validated with users, shared broadly across the team, and updated regularly as understanding evolves. Treat flows as living tools for thinking rather than static deliverables, and they will repay your investment many times over through better design decisions and fewer costly mistakes.")
        ])
    ]
})

# ============================================================
# NOTE 2: sketching
# ============================================================
notes.append({
    "id": "sketching",
    "themeId": "rose",
    "title": "Sketching in UX",
    "subtitle": "Rapid Visualization for Design Thinking",
    "wordCount": "~2,400 words",
    "tags": ["Sketching", "Ideation", "UX Design", "Visual Thinking"],
    "sections": [
        section("sketching-1", "Why Sketch in UX", "pencil-amber", [
            para("Sketching is one of the fastest and most accessible tools in a designer toolkit for generating and communicating ideas. Unlike high fidelity digital work, sketching removes the pressure of perfection and encourages rapid exploration of multiple concepts. It leverages the brain visual processing capabilities to uncover solutions that words alone cannot reach. The act of sketching engages different cognitive pathways than verbal or written thinking, forcing designers to make spatial decisions, consider proportions, and think about relationships between elements."),
            para("This visual mode of thinking often reveals connections and possibilities that remain hidden during purely verbal brainstorming sessions. When you sketch, you externalize your thinking in a way that makes it visible, tangible, and shareable. A sketch captures not just the idea but the spatial relationships, priorities, and structure that words alone struggle to convey. This is why the most accomplished designers across all disciplines sketch as part of their daily practice, not because they are creating art, but because they are thinking visually."),
            para("Sketching bypasses the constraints of digital tools and lets designers focus entirely on ideas rather than pixels. Without the distraction of colors, fonts, and alignment tools, sketching keeps attention on structure, layout, and user flow. It accelerates the ideation process by enabling designers to iterate through dozens of ideas in a single session before committing to any direction. Paper and pencil are inexpensive and universally available, making sketching an inclusive activity that anyone on the team can participate in regardless of their role or technical skill level."),
            callout("Sketching Benefits", "Sketching bypasses the constraints of digital tools and lets designers focus entirely on ideas rather than pixels. It accelerates the ideation process, facilitates team collaboration, and produces a tangible artifact that can be evaluated and improved upon. The speed and low cost of sketching make it the highest bandwidth tool for early stage design thinking."),
            subheading("Key Advantages of Sketching"),
            bullets([
                ("Speed", "Sketching takes seconds, allowing designers to iterate through dozens of ideas in a single session before committing to any direction. This speed is invaluable in early stages when exploration is paramount and the cost of pursuing a wrong direction is minimal."),
                ("Low Cost", "Paper and pencil are inexpensive and universally available, making sketching an inclusive activity anyone on the team can participate in. There is no software license, no learning curve, and no setup time required to start sketching."),
                ("Flexibility", "Sketches are easy to modify, annotate, or discard, encouraging divergent thinking and reducing attachment to any single solution. The impermanence of sketches makes it psychologically safe to explore unconventional ideas."),
                ("Communication", "Visual sketches convey complex spatial relationships more clearly than verbal descriptions, reducing misunderstandings across teams. A 30 second sketch can communicate what a paragraph of text cannot."),
                ("Focus on Ideas", "Without the distraction of colors and fonts, sketching keeps attention on structure, layout, and user flow. This structural focus ensures the foundation is solid before cosmetic decisions are made."),
                ("Cognitive Engagement", "Sketching activates different cognitive pathways than verbal thinking, often revealing connections and solutions that remain hidden during purely verbal brainstorming. The physical act of drawing engages spatial reasoning and pattern recognition.")
            ]),
            stat("75%", "faster concept exploration with sketching vs digital tools", "Time studies comparing sketching and digital wireframing in early ideation sessions")
        ]),
        section("sketching-2", "Sketching Techniques and Methods", "tool", [
            para("Several established sketching techniques help designers generate diverse ideas efficiently and collaboratively. Each technique serves a different purpose, from individual ideation to group brainstorming. Mastering these techniques gives designers a versatile set of approaches for any design challenge. The best technique is the one that gets you past the blank page, and the goal is to generate ideas, not to execute a technique perfectly. Designers should build a repertoire of techniques they can draw on depending on the specific challenge and context."),
            para("Crazy 8s is a rapid sketching exercise where participants fold a page into eight sections and sketch eight distinct ideas in eight minutes. The time constraint forces divergent thinking and prevents overthinking by creating urgency that bypasses the inner critic. Storyboard sketching involves sketching a sequence of frames that depict the user journey through a product over time, emphasizing context, emotion, and the before and after states of an interaction. Wireframe sketching creates rough layouts of interface screens using basic shapes and lines to represent content areas, focusing on structure and hierarchy without visual styling."),
            para("Collaborative techniques amplify the power of sketching by bringing multiple perspectives to bear on a single challenge. Round Robin is a collaborative method where each team member starts a sketch and passes it to the next person to build upon, generating unexpected hybrid solutions that no single person would have developed alone. Silent Sketching involves group members sketching ideas simultaneously without discussion, then presenting results together, which eliminates groupthink and ensures quieter team members contribute equally. Sketchboarding is a large scale approach where sketches are pinned to a board and organized into themes or sequences, creating an immersive gallery of ideas that the team can evaluate and build upon."),
            callout("Choose the Right Technique", "The best sketching technique is the one that gets you past the blank page. Do not get attached to any single method. Your goal is to generate ideas, not to execute a technique perfectly. Adapt your approach to the team, the challenge, and the stage of the design process."),
            subheading("Core Sketching Techniques"),
            bullets([
                ("Crazy 8s", "A rapid sketching exercise where participants fold a page into eight sections and sketch eight distinct ideas in eight minutes. The extreme time constraint forces divergent thinking and prevents overthinking by creating productive urgency that bypasses self censorship."),
                ("Storyboard Sketching", "Sketching a sequence of frames that depict the user journey through a product over time. Storyboards emphasize context, emotion, and the before and after states of an interaction, capturing the narrative arc of the user experience."),
                ("Wireframe Sketching", "Creating rough layouts of interface screens using basic shapes and lines to represent content areas. Wireframe sketches focus on structure and hierarchy without visual styling, serving as the bridge between ideation and digital design."),
                ("Round Robin", "A collaborative method where each team member starts a sketch and passes it to the next person to build upon. This generates unexpected hybrid solutions that combine the strengths of multiple perspectives."),
                ("Silent Sketching", "A group technique where participants sketch ideas simultaneously without discussion, then present results together. Silent sketching eliminates groupthink and ensures contributions from all team members regardless of personality type."),
                ("Sketchboarding", "A large scale approach where sketches are pinned to a board and organized into themes or sequences. Sketchboarding creates an immersive gallery of ideas that enables pattern recognition and cross pollination between concepts.")
            ]),
            quote("The best sketching technique is the one that gets you past the blank page. Do not get attached to any single method. Your goal is to generate ideas, not to execute a technique perfectly.")
        ]),
        section("sketching-3", "From Sketch to Digital Design", "check", [
            para("Transitioning from sketches to digital designs is a deliberate process that preserves the core ideas while adding fidelity and precision. The goal is not to recreate the sketch exactly, but to interpret its structural and conceptual intent. A structured refinement process ensures the best elements survive into the final design while allowing the flexibility to improve and adapt as the design becomes more concrete. The journey from sketch to screen is not a linear handoff but a continuous loop of refinement, with original sketches remaining valuable references throughout the digital design process."),
            para("The first step in the transition is to review and select by evaluating sketches against user needs and business goals, identifying the strongest concepts and recurring patterns across multiple sketches. This evaluative phase requires setting aside attachment to individual ideas and objectively assessing which concepts best serve the design challenge. Next, combine and merge by synthesizing the best elements from multiple sketches into hybrid solutions that capture the strengths of each approach. The most innovative designs often emerge from combining elements of different sketches rather than selecting a single winning concept."),
            para("The translation phase converts refined sketches into digital wireframes using tools like Figma or Sketch, maintaining the same layout and structural decisions while adding precision and consistency. During this translation, designers must be careful to preserve the intent of the sketch while taking advantage of digital tools capabilities for alignment, spacing, and component reuse. The final phase is digital iteration, where the design continues to be refined in the digital medium through testing, gathering feedback, and making data informed improvements. Each digital iteration should reference back to the original sketches to ensure the core concept remains intact as details are added and refined."),
            callout("Preserve the Core", "The journey from sketch to screen is not a linear handoff but a continuous loop of refinement. Original sketches remain valuable references throughout the digital design process. When you encounter a design decision point in digital tools, refer back to the sketches to remember the original intent and rationale."),
            subheading("Refinement Process"),
            bullets([
                ("Review and Select", "Evaluate sketches against user needs and business goals, identifying the strongest concepts and recurring patterns across multiple sketches. This phase requires objectivity and a willingness to set aside attachment to specific ideas."),
                ("Combine and Merge", "Synthesize the best elements from multiple sketches into hybrid solutions that capture the strengths of each approach. The most innovative designs often emerge from combining elements of different sketches."),
                ("Translate to Digital", "Convert refined sketches into digital wireframes using tools like Figma or Sketch, maintaining the same layout and structural decisions while adding precision and consistency through alignment grids and component libraries."),
                ("Iterate Digitally", "Continue refining in the digital medium by testing, gathering feedback, and making data informed improvements. Each digital iteration should reference back to original sketches to preserve core concepts."),
                ("Annotate and Document", "Add annotations to digital wireframes that capture the design rationale from the original sketches. This documentation ensures the thinking behind structural decisions survives throughout the development process.")
            ]),
            stat("3x", "more design solutions generated when starting with sketches vs digital tools", "Comparative study of ideation methods in UX design teams")
        ]),
        section("sketching-4", "Materials, Tools, and Building a Sketching Practice", "search", [
            para("The materials you choose for sketching can significantly influence your creative output. While pencil and paper are the most accessible options, different tools offer distinct advantages for different scenarios. Understanding the properties of various materials helps designers choose the right tool for each task. Mechanical pencils with 0.5mm or 0.7mm leads offer consistent line quality for precise wireframe sketches. Fine tip black pens from 0.3mm to 0.5mm produce clean lines that scan well for digital sharing, making them ideal for sketches that will be photographed or scanned for digital distribution."),
            para("Building a consistent sketching habit transforms the activity from a deliberate effort into an instinctive response to design challenges. Like any skill, sketching improves dramatically with regular practice. The most accomplished designers sketch as part of their daily routine, spending five minutes each morning sketching simple objects or UI patterns as warm up exercises that loosen the hand and train visual thinking. Keeping a sketch journal documenting design decisions and observations in visual form creates a personal reference library of techniques that grows over time."),
            para("Setting constraints is a powerful way to build sketching skill and creativity. Challenge yourself with timed exercises or material constraints that force creative problem solving and prevent perfectionism. For example, limit yourself to using only a black pen with no pencil or eraser, forcing commitment to each line and reducing the temptation to polish. Share your sketches online or with colleagues to create external accountability that motivates maintaining practice. Posting sketches publicly also invites feedback and exposes you to different approaches from other designers."),
            callout("Practice Consistently", "Like any skill, sketching improves dramatically with regular practice. Building a consistent sketching habit transforms the activity from a deliberate effort into an instinctive response to design challenges. The most accomplished designers sketch as part of their daily routine."),
            subheading("Recommended Materials and Practice Strategies"),
            bullets([
                ("Mechanical Pencils", "0.5mm or 0.7mm mechanical pencils offer consistent line quality and precise control for detailed wireframe sketches. The consistent line weight produces clean, professional looking sketches suitable for client presentations."),
                ("Fine Tip Pens", "Black pens with 0.3mm to 0.5mm tips produce clean lines that scan well for digital sharing. Ballpoint pens offer a smooth, low friction experience that allows fast, fluid sketching without interruption."),
                ("Grid or Dot Grid Paper", "Grid or dot grid paper helps maintain proportions and alignment when sketching interfaces. The grid provides a subtle structure that keeps layouts organized without constraining creativity."),
                ("Gray Tone Markers", "Gray tone markers are useful for adding shading and depth to sketches, helping distinguish content layers and establishing visual hierarchy. A limited set of three gray values is sufficient for most sketching needs."),
                ("Digital Tablets", "Tablets with stylus support combine the freedom of sketching with digital benefits like layers, undo functionality, and easy sharing. They are ideal for designers who want to sketch digitally without losing the tactile feel of drawing."),
                ("Sketch Journal", "Keep a dedicated sketch journal for documenting design decisions, observations, and inspiration. A journal creates a personal reference library of techniques and ideas that grows in value over time.")
            ]),
            quote("Every master sketch was once a beginner scribble. The difference is not talent but volume. Sketch more, judge less, and trust the process. Volume is the only reliable path to improvement."),
            stat("3x", "more ideas generated with a dedicated sketching kit vs improvised materials", "Observational study of design team ideation sessions")
        ]),
        section("sketching-5", "Collaboration, Communication, and Common Mistakes", "target", [
            para("Sketching is not only an individual ideation tool but also a powerful medium for collaborative design. When teams sketch together, they create a shared visual language that accelerates alignment and reduces misinterpretation. Collaborative sketching is a staple of modern design practices, used in design sprints, workshops, and regular team meetings. In stakeholder meetings, a simple sketch can resolve ambiguities that would take minutes of verbal explanation. When you sketch an idea in real time during a discussion, you demonstrate your thinking process and invite collaboration from others."),
            para("Whiteboard sessions gather the team around a shared surface and take turns sketching ideas in response to a shared challenge. The public nature of whiteboard sketching encourages building on each other ideas and creates a collaborative energy that individual sketching cannot replicate. Sketch and critique sessions combine individual thinking with collective evaluation by having team members sketch individually for a set time, then present for structured critique. This approach ensures everyone contributes ideas before any evaluation occurs, preventing the most vocal team members from dominating the direction."),
            para("Even experienced designers fall into predictable traps when sketching. The most important principle is that sketching is a tool for thinking, not for producing finished artwork. Worrying about how the sketch looks rather than what it communicates is the most common mistake, and ugly sketches can contain brilliant ideas. Drawing too small limits detail and makes sketches hard to read, so designers should use the full page and give concepts room to breathe. Assuming the sketch speaks for itself without labels is another common error, and annotations explain intent and capture design rationale that the drawing alone cannot convey."),
            callout("Inclusive Collaboration", "Not everyone on your team will feel confident sketching. Establish norms that value ideas over artistic quality and provide templates that non designers can assemble rather than draw from scratch. The goal is visual thinking, not artistic expression."),
            subheading("Common Sketching Mistakes"),
            bullets([
                ("Focusing on Aesthetics", "Worrying about how the sketch looks rather than what it communicates. Ugly sketches can contain brilliant ideas. The goal is visual thinking, not artistic expression, and prioritizing appearance over content undermines the purpose of sketching."),
                ("Sketches Too Small", "Drawing too small limits detail and makes sketches hard to read. Use the full page and give concepts room to breathe. Small sketches convey timidity and make it difficult for others to understand and build upon the idea."),
                ("Not Annotating", "Assuming the sketch speaks for itself without labels. Annotations explain intent and capture design rationale that the drawing alone cannot convey. A sketch without notes is ambiguous and open to misinterpretation."),
                ("Premature Detailing", "Adding fine details before the basic structure is resolved. Start with rough proportions, then add detail after the arrangement is established. Details should serve the idea, not distract from it."),
                ("Skipping Variation", "Settling on the first reasonable idea instead of generating multiple alternatives. The most innovative solutions emerge from the tenth or twentieth sketch, not the first. Quantity is a prerequisite for quality."),
                ("Designing in Isolation", "Sketching alone and never sharing with the team. Collaborative sketching produces stronger ideas through diverse input and builds shared ownership of the design direction.")
            ]),
            output("Your ability to sketch is about having a rapid, universal visual language for design thinking. A designer who can sketch can communicate, collaborate, and iterate faster than one who cannot. Sketching is not a talent you are born with but a skill you develop through practice. The best time to start is now."),
            quote("A designer who can sketch can communicate, collaborate, and iterate faster than one who cannot. Sketching is not a talent you are born with but a skill you develop through practice.")
        ])
    ]
})

# ============================================================
# NOTE 3: design-sprint
# ============================================================
notes.append({
    "id": "design-sprint",
    "themeId": "emerald",
    "title": "Design Sprints",
    "subtitle": "Five Days to Solve Big Problems and Test New Ideas",
    "wordCount": "~2,400 words",
    "tags": ["Design Sprint", "Agile", "Rapid Prototyping", "GV"],
    "sections": [
        section("design-sprint-1", "What Is a Design Sprint", "plus", [
            para("A design sprint is a time constrained, five day process that uses design thinking principles to reduce risk and accelerate product development. Developed by Jake Knapp at Google Ventures, the sprint compresses months of work into a single week. Teams emerge with a prototype tested by real users and a clear plan for next steps. The design sprint methodology was first developed at Google in 2010 to answer critical business questions through design, prototyping, and testing ideas with users, and it has since been used by thousands of teams at companies ranging from startups to Fortune 500 enterprises."),
            para("The Google Ventures design sprint follows a structured recipe: understand the problem, diverge with solutions, converge on the best idea, build a prototype, and test it with users. It has been used to validate concepts before investing significant development resources. The process is particularly valuable for high stakes problems where getting the right answer matters enormously and the cost of being wrong is high. Sprints force focused decision making by creating artificial scarcity of time, which paradoxically leads to better decisions because teams cannot overthink or procrastinate."),
            para("Design sprints are ideal for several specific scenarios. When you have a big problem with significant business impact and limited time to explore solutions, the sprint structure forces focused decision making that prevents analysis paralysis. When your team is stuck on the best approach to a challenge, the sprint provides structured decision making that breaks deadlocks by creating a clear process for evaluating options. When you need to test a new direction before committing to months of development, sprints validate assumptions quickly and cheaply. And when alignment across design, product, engineering, and business is critical, sprints create shared understanding through intense collaboration."),
            callout("The GV Design Sprint", "The Google Ventures design sprint follows a structured recipe: understand the problem, diverge with solutions, converge on the best idea, build a prototype, and test it with users. It has been used to validate concepts before investing significant development resources. The sprint is not about building the perfect product. It is about learning what works before you commit to building anything at all."),
            subheading("When to Run a Sprint"),
            bullets([
                ("High Stakes Problems", "When you have a big problem with significant business impact and limited time to explore solutions. Sprints force focused decision making that prevents analysis paralysis and drives toward actionable outcomes."),
                ("Team Disagreement", "When your team is stuck on the best approach to a challenge. The sprint provides structured decision making that breaks deadlocks by creating a clear, democratic process for evaluating and selecting options."),
                ("New Product or Feature", "When you need to test a new direction before committing to months of development. Sprints validate assumptions quickly and cheaply, preventing investment in ideas that users do not want."),
                ("Cross Functional Alignment", "When alignment across design, product, engineering, and business is critical. Sprints create shared understanding through intense, colocated collaboration that builds trust and common purpose."),
                ("High Uncertainty", "When the team faces significant unknowns about user behavior, technical feasibility, or market demand. Sprints resolve the most critical uncertainties in a single week.")
            ]),
            stat("5 days", "to go from problem to tested prototype", "Standard design sprint duration as defined by Google Ventures")
        ]),
        section("design-sprint-2", "The Five Phases of a Sprint", "refresh", [
            para("Each day of the design sprint has a distinct focus that builds on the previous day work. The structure ensures teams move efficiently from problem definition to validated solution. Understanding each phase helps participants contribute effectively and maintain momentum throughout the week. Monday is dedicated to understanding the problem by mapping the challenge, gathering research, and setting a long term goal. The team creates a journey map and identifies the most critical area to focus on, establishing a shared understanding of the problem space before any solutions are considered."),
            para("Tuesday is the divergence phase where the team generates a wide range of solutions through sketching and ideation. The goal is quantity over quality before narrowing down, and techniques like Crazy 8s and solution sketches ensure every participant contributes ideas. Wednesday is the convergence phase where the team reviews all solutions, votes on the strongest concepts, and assembles a storyboard for the prototype. Decision making is structured and democratic, using dot voting and decider authority to ensure the best ideas win regardless of who proposed them."),
            para("Thursday is the prototyping phase where the team builds a realistic prototype that looks and feels like a finished product. The goal is not pixel perfect perfection but sufficient fidelity to elicit genuine reactions from test users. Tools like Figma, Keynote, or no code platforms enable rapid prototype creation in a single day. Friday is the testing phase where the team conducts user interviews and observes real users interacting with the prototype. Five interviews are typically enough to reveal major patterns, and the team watches remotely, taking notes and capturing quotes that will inform next steps."),
            callout("The Sprint Promise", "The design sprint is not about building the perfect product. It is about learning what works before you commit to building anything at all. By compressing months of work into a single week, sprints dramatically reduce the risk of investing in the wrong solution."),
            subheading("Daily Sprint Breakdown"),
            bullets([
                ("Monday Understand", "Map the problem, gather research, and set a long term goal. The team creates a journey map and identifies the most critical area to focus on, establishing a shared understanding before any solutions are considered."),
                ("Tuesday Diverge", "Generate a wide range of solutions through sketching and ideation. The goal is quantity over quality before narrowing down. Techniques like Crazy 8s and solution sketches ensure every participant contributes."),
                ("Wednesday Converge", "Review all solutions, vote on the strongest concepts, and assemble a storyboard for the prototype. Decision making is structured and democratic, with dot voting and decider authority."),
                ("Thursday Prototype", "Build a realistic prototype that looks and feels like a finished product using tools like Figma or no code platforms. The goal is sufficient fidelity to elicit genuine reactions from test users."),
                ("Friday Test", "Conduct user interviews and observe real users interacting with the prototype. Five interviews typically reveal major patterns. The team watches remotely, taking notes and capturing quotes.")
            ]),
            quote("The design sprint is not about building the perfect product. It is about learning what works before you commit to building anything at all. Compressing months of work into a single week dramatically reduces risk.")
        ]),
        section("design-sprint-3", "Preparation and Team Composition", "search", [
            para("The success of a design sprint is largely determined by the quality of preparation in the days and weeks before it begins. Proper preparation ensures the sprint week is spent on high value creative work rather than logistics. Investing preparation time pays dividends in sprint productivity. Articulate the problem in a single sentence so a clear, focused challenge prevents scope creep and keeps the sprint on track. Identify six to eight people from design, product, engineering, and business, with each participant having a clear role and the authority to make decisions within their domain."),
            para("The composition of the sprint team is one of the most important factors in determining success. A well balanced team brings diverse perspectives and decision making authority. The Decider is the person with authority to make final decisions, typically a product manager, founder, or executive whose presence ensures the sprint output has organizational backing. The Sprint Master is the facilitator who manages time, runs activities, and keeps the team on track without contributing design ideas. The Designer creates sketches, wireframes, and the prototype. The Engineer provides feasibility feedback and ensures the prototype is buildable."),
            para("Additional critical roles include the Product Expert, someone with deep knowledge of the product, users, and market to ground the sprint in real world context. The User Researcher designs the test protocol, conducts interviews, and synthesizes findings to ensure insights are captured and translated into actionable recommendations. Larger teams create coordination overhead and slow decision making, so if more than eight people need involvement, consider having core participants with advisors checking in at key moments. Recruit and schedule five users for Friday testing sessions before the sprint begins, each session lasting 30 to 60 minutes with a consistent protocol."),
            callout("Keep the Team Small", "Larger teams create coordination overhead and slow decision making. If more than eight people need involvement, consider having core participants with advisors checking in at key moments. Every participant should have an active role and clear contribution to the sprint goals."),
            subheading("Sprint Team Roles"),
            bullets([
                ("Decider", "The person with authority to make final decisions. Typically a product manager, founder, or executive who can commit the organization to the sprint direction. The Decider prevents decision deadlock."),
                ("Sprint Master", "The facilitator who manages time, runs activities, and keeps the team on track without contributing design ideas. The Sprint Master enforces timeboxes and maintains focus."),
                ("Designer", "A skilled designer who creates sketches, wireframes, and the prototype. The Designer translates ideas into tangible artifacts that can be tested."),
                ("Engineer", "A technical team member who provides feasibility feedback and ensures the prototype is buildable within the sprint timeline. The Engineer grounds the sprint in technical reality."),
                ("Product Expert", "Someone with deep knowledge of the product, users, and market to ground the sprint in real world context and prevent unrealistic solutions."),
                ("User Researcher", "A researcher who designs the test protocol, conducts interviews, and synthesizes findings. The Researcher ensures testing produces reliable, actionable insights.")
            ]),
            stat("80%", "of sprint success depends on preparation quality", "Retrospective analysis of over 200 design sprints")
        ]),
        section("design-sprint-4", "Running, Adapting, and Following Up", "check", [
            para("Successful design sprints require strong facilitation and commitment to the process from all participants. The sprint master plays a crucial role in keeping the team focused and on schedule. Following established best practices increases the likelihood of actionable outcomes. Assemble a diverse team with decision makers who can commit to the resulting direction. Gather research and set up the workspace before the sprint begins to avoid wasting time on logistics. Use timers to keep discussions from derailing, because quick decisions are better than perfect ones in a sprint context."),
            para("Design sprints can be conducted effectively with remote teams, though they require additional planning compared to in person sprints. With the right tools and facilitation techniques, remote sprints can match the productivity of colocated sprints. Use digital whiteboarding tools like Miro, FigJam, or Mural as the shared canvas for all sprint activities, replicating sticky notes and voting digitally. Require cameras on for all activities to maintain engagement and read non verbal cues. Schedule shorter, more focused sessions with longer breaks to combat screen fatigue, which is a significant challenge in remote sprint environments."),
            para("The work does not end when the sprint concludes on Friday. The post sprint phase is where insights are translated into action. Compile user test results, key quotes, and observations into a summary identifying patterns across participants. Prepare a sprint summary with the prototype, test results, and recommended next steps for stakeholders. Convert insights into a prioritized backlog of design, development, and testing tasks with owners and timelines. Identify questions that remain unanswered and plan additional research before full scale development. Conduct a retrospective on the sprint process to capture what worked and what could be improved for future sprints."),
            callout("Energy Management for Remote Sprints", "Remote sprints require more intentional energy management than in person sprints. Schedule shorter, more focused sessions with longer breaks to combat screen fatigue. Require cameras on for all activities to maintain engagement and read non verbal cues that are lost in audio only communication."),
            subheading("Post Sprint Activities"),
            bullets([
                ("Synthesize Findings", "Compile user test results, key quotes, and observations into a summary identifying patterns across participants. Synthesis should highlight what worked, what did not, and what was unexpected."),
                ("Create Documentation", "Prepare a sprint summary with the prototype, test results, and recommended next steps for stakeholders. Good documentation ensures the sprint investment produces lasting organizational value."),
                ("Prioritize Next Steps", "Convert insights into a prioritized backlog of design, development, and testing tasks with owners and timelines. Clear ownership prevents insights from being lost."),
                ("Plan Follow Up Research", "Identify questions that remain unanswered and plan additional research before full scale development. Sprints reveal what you know and what you still need to learn."),
                ("Celebrate and Reflect", "Conduct a retrospective on the sprint process to capture what worked and what could be improved. Continuous improvement of the sprint process itself increases value over time.")
            ]),
            output("After the sprint, compile findings, prioritize next steps, and transition validated concepts into the development pipeline. The sprint marks the beginning of informed execution, not the end of the process. The true value of a sprint is realized through disciplined follow through.")
        ]),
        section("design-sprint-5", "Common Pitfalls and Best Practices", "lightbulb", [
            para("Even well planned sprints can encounter obstacles that reduce their effectiveness. Recognizing common pitfalls helps sprint masters navigate challenges proactively and ensures the sprint delivers maximum value. Attempting to solve too many problems in one sprint dilutes focus and prevents deep exploration of any single challenge. The single most critical question should be the sole focus of the sprint, and all activities should serve answering that question. Missing key decision makers or including too many observers prevents the sprint from producing actionable outcomes, because decisions cannot be made without the people who have authority."),
            para("Allowing discussions to overrun timeboxes is one of the most common sprint failures. The sprint master must enforce time limits ruthlessly because the entire structure depends on each phase completing on schedule. Time management is not about being rigid but about respecting the process that makes sprints work. Building a prototype too rough to test meaningfully fails to elicit genuine user reactions, while a prototype too polished for a single day consumes time that should be spent on testing and learning. Finding the right balance of fidelity is a skill that improves with experience."),
            para("Recruiting participants who do not match the target audience produces misleading results that can send the team in the wrong direction. Invest time in recruiting screeners to ensure test participants accurately represent the target user population. Similarly, testing with colleagues or friends instead of real target users produces feedback that is skewed by familiarity and social pressure. Non target users give misleading feedback because they do not share the same needs, context, or constraints as the actual audience. The quality of sprint outcomes is directly proportional to the quality of test participants."),
            subheading("Pitfalls and Best Practices"),
            bullets([
                ("Too Broad a Challenge", "Attempting to solve too many problems in one sprint dilutes focus. Focus on the single most critical question that, if answered, would have the greatest impact on the product direction."),
                ("Wrong Participants", "Missing key decision makers or including too many observers prevents actionable outcomes. Every participant should have an active role and the authority to make decisions within their domain."),
                ("Poor Time Management", "Allowing discussions to overrun timeboxes destroys the sprint structure. The sprint master must enforce time limits ruthlessly because the entire process depends on each phase completing on schedule."),
                ("Insufficient Fidelity", "Building a prototype too rough to test meaningfully or too polished for a single day. Find the right balance where the prototype elicits genuine reactions without consuming time needed for testing."),
                ("Wrong Test Users", "Recruiting participants who do not match the target audience produces misleading results. Invest in quality recruiting screeners to ensure test participants accurately represent the target user population."),
                ("Skipping Preparation", "Rushing into the sprint week without adequate preparation wastes the most expensive resource in the process. Preparation determines sprint success more than any other factor.")
            ]),
            callout("Preventable Sprint Failures", "Most sprint failures are preventable. By anticipating common pitfalls and building safeguards into the plan, teams can ensure the sprint delivers actionable, validated outcomes. The most important safeguard is preparation, which determines sprint success more than any other factor."),
            quote("The design sprint is a powerful catalyst, but its true value is realized through disciplined follow through. Insights must be translated into concrete product decisions. A sprint without follow up is a week of wasted effort."),
            output("Most sprint failures are preventable. By anticipating common pitfalls and building safeguards into the plan, teams can ensure the sprint delivers actionable, validated outcomes. The design sprint is not the end of the process but the beginning of informed product development.")
        ])
    ]
})

# ============================================================
# NOTE 4: ux-laws
# ============================================================
notes.append({
    "id": "ux-laws",
    "themeId": "cyan",
    "title": "Laws of UX",
    "subtitle": "Psychological Principles for Intuitive Interfaces",
    "wordCount": "~2,400 words",
    "tags": ["UX Laws", "Psychology", "Usability", "UI Design"],
    "sections": [
        section("ux-laws-1", "Foundational Laws of UX", "plus", [
            para("The Laws of UX are a collection of psychological principles that describe how humans perceive, process, and interact with digital interfaces. These laws are drawn from decades of cognitive psychology and human factors research. Designers who understand these principles can create more intuitive, efficient, and satisfying user experiences. What makes UX laws powerful is their predictive nature. When you understand Fitts Law, you can predict that a tiny button in the corner will be harder to click than a large button near the cursor, transforming design from a subjective art into an evidence based practice."),
            para("UX laws provide evidence based guidelines that reduce guesswork in design decisions. They help designers predict how users will react to interface elements and explain why certain designs feel more natural than others. Fitts Law states that the time required to acquire a target is a function of its size and distance, meaning larger, closer targets are faster to click. Hick Law states that decision time increases with the number and complexity of choices, making it essential to reduce options and group related items. Jakob Law says users spend most of their time on other websites, so they expect your site to work the same way."),
            para("Miller Law describes how the average person holds about seven items in working memory, suggesting information should be chunked into groups of five to nine items. The Pareto Principle states that 80 percent of effects come from 20 percent of causes, indicating design efforts should focus on the most commonly used features. The Von Restorff Effect shows that items standing out visually are more likely to be remembered, so contrast should be used strategically to draw attention to key actions. Together, these laws form a powerful toolkit for evidence based design that reduces guesswork and increases the likelihood of creating intuitive interfaces."),
            callout("Why UX Laws Matter", "UX laws provide evidence based guidelines that reduce guesswork in design decisions. They help designers predict how users will react to interface elements and explain why certain designs feel more natural than others. When you understand these principles, you move from subjective preference to evidence based reasoning."),
            subheading("The Core UX Laws"),
            bullets([
                ("Fitts Law", "The time required to acquire a target is a function of its size and distance. Larger, closer targets are faster to click. Make primary action buttons large and position them at viewport edges where users can click without precise aiming. Place destructive actions in less accessible locations."),
                ("Hick Law", "Decision time increases with the number and complexity of choices. Reducing options and grouping related items helps users make faster decisions. Break complex forms into multi step processes and use progressive disclosure to reveal options when they become relevant."),
                ("Jakob Law", "Users spend most of their time on other websites, so they expect your site to work the same way. Leveraging familiar conventions reduces the learning curve. Follow established patterns for navigation placement, search functionality, and checkout flows."),
                ("Miller Law", "The average person holds about seven items in working memory. Chunking information into groups of five to nine items improves processing and retention. Structure navigation menus with no more than seven items and group related settings into logical categories."),
                ("Pareto Principle", "Eighty percent of effects come from twenty percent of causes. Focus design efforts on the most commonly used features for greatest impact. Identify the 20 percent of features that users engage with most and invest disproportionate effort in perfecting them."),
                ("Von Restorff Effect", "Items that stand out visually are more likely to be remembered. Use contrast strategically to draw attention to key actions. Use color, size, or animation to highlight the primary call to action while keeping secondary actions visually subdued.")
            ]),
            stat("50+", "documented laws and principles in the UX canon", "Compiled from cognitive psychology, human factors, and UX research")
        ]),
        section("ux-laws-2", "Applying UX Laws in Practice", "target", [
            para("Understanding UX laws is valuable, but applying them effectively is what transforms good design into great design. Each law suggests specific design tactics that can be implemented immediately. The most skilled designers internalize these principles until application becomes intuitive. Fitts Law in practice means making primary action buttons large and positioning them at viewport edges where users can click without precise aiming, while placing destructive actions in less accessible locations. Hick Law in practice means breaking complex forms into multi step processes and using progressive disclosure to reveal options when they become relevant."),
            para("Jakob Law in practice means following established patterns for navigation placement, search functionality, and checkout flows because users should not have to learn new paradigms for common tasks. Miller Law in practice means structuring navigation menus with no more than seven items and grouping related settings into logical categories that respect working memory limits. The Von Restorff Effect in practice means using color, size, or animation to highlight the primary call to action while keeping secondary actions visually subdued so users naturally gravitate toward the most important action."),
            para("Beyond the core laws, several additional principles refine the designer understanding of user behavior. The Doherty Threshold states that productivity soars when system and user interact at a pace where neither waits on the other, with response times under 400 milliseconds being the target. Tesler Law says any system has irreducible complexity that must be managed, and designers should push complexity into the backend so the user experience remains simple. The Law of Common Region indicates that elements sharing a clearly defined boundary are perceived as a group, making cards and borders effective tools for organizing related information."),
            callout("Laws Are Tools, Not Rules", "UX laws are not rules to be followed blindly, but tools to be wielded with intention. The best designers know when to apply a law and when to break it for creative effect. Treat UX laws as heuristics rather than commandments, and always validate through testing with real users because context and individual differences moderate how strongly a law applies."),
            subheading("Practical Applications of UX Laws"),
            bullets([
                ("Fitts Law in Practice", "Make primary action buttons large and position them at viewport edges where users can click without precise aiming. Place destructive actions in less accessible locations to prevent accidental clicks."),
                ("Hick Law in Practice", "Break complex forms into multi step processes and use progressive disclosure to reveal options when they become relevant. Reduce the number of visible choices to accelerate decision making."),
                ("Jakob Law in Practice", "Follow established patterns for navigation placement, search functionality, and checkout flows. Users should not have to learn new paradigms for common tasks they perform across multiple products."),
                ("Miller Law in Practice", "Structure navigation menus with no more than seven items and group related settings into logical categories. Chunk information to match working memory capacity."),
                ("Von Restorff in Practice", "Use color, size, or animation to highlight the primary call to action while keeping secondary actions visually subdued. Strategic contrast guides attention to the most important action."),
                ("Doherty Threshold in Practice", "Aim for response times under 400 milliseconds to maintain the flow of interaction. Show loading states for operations taking longer and optimize backend performance to meet this threshold.")
            ]),
            quote("UX laws are not rules to be followed blindly, but tools to be wielded with intention. The best designers know when to apply a law and when to break it for creative effect. Context determines applicability.")
        ]),
        section("ux-laws-3", "History, Origins, and Evolution", "search", [
            para("The laws that inform modern UX design have roots stretching back over a century of psychological research. Understanding the origins provides context that helps designers apply them more thoughtfully. Each law was discovered through rigorous scientific study, often in contexts far removed from digital design. Paul Fitts, an American psychologist, discovered the relationship between target size, distance, and selection time in 1954 while studying human motor skills. His work became Fitts Law, which is now one of the most cited principles in interface design, informing everything from button sizing to menu layout."),
            para("William Hick published his research on decision time in 1952, demonstrating that decision time increases logarithmically with the number of choices. This formed the basis for Hick Law, which has profound implications for interface design where reducing choice complexity directly improves user experience. George Miller published The Magical Number Seven in 1956, demonstrating the limited capacity of human working memory. His work informs how designers structure information presentation to match cognitive capacity, though it is important to note that Miller Law studied recall, not recognition, and users can recognize from larger sets when items are well organized."),
            para("Jakob Nielsen formulated Jakob Law in the 1990s based on extensive research into web usability and user behavior patterns. Unlike the earlier laws that emerged from academic psychology, Nielsen law emerged from applied usability research, making it particularly relevant to digital design. UX law research continues today, with contemporary researchers validating, refining, and extending these principles for modern interfaces. Behavioral economics provides new insights into how users make decisions, and research on mobile and touch interactions is extending and sometimes challenging traditional UX laws that were developed for desktop interfaces."),
            subheading("Key Historical Figures"),
            bullets([
                ("Paul Fitts (1954)", "American psychologist who discovered the relationship between target size, distance, and selection time while studying human motor skills. His work became Fitts Law, now one of the most cited principles in interface design, informing button sizing, menu layout, and touch target design."),
                ("William Hick (1952)", "British psychologist who demonstrated that decision time increases logarithmically with the number of choices, forming the basis for Hick Law. His research has profound implications for interface design where reducing choice complexity directly improves user experience."),
                ("George Miller (1956)", "American psychologist who published The Magical Number Seven, demonstrating the limited capacity of human working memory. His work informs how designers structure information presentation to match cognitive capacity."),
                ("Jakob Nielsen (1990s)", "Danish usability researcher who formulated Jakob Law based on extensive research into web usability and user behavior patterns. Unlike earlier laws from academic psychology, Nielsen law emerged from applied usability research."),
                ("Don Norman (1980s)", "Cognitive scientist who introduced the concepts of affordances and signifiers, bridging the gap between cognitive psychology and design practice. His book The Design of Everyday Things remains a foundational text in UX.")
            ]),
            callout("Research Continues", "UX law research continues today. Contemporary researchers validate, refine, and extend these principles for modern interfaces, with behavioral economics providing new insights. Mobile, voice, and augmented reality interfaces are challenging and extending traditional UX laws."),
            stat("50+", "years of psychological research informing UX laws", "Spanning from Fitts 1954 research through contemporary behavioral economics studies")
        ]),
        section("ux-laws-4", "Combining Laws for Greater Impact", "tool", [
            para("The most sophisticated UX designs apply multiple laws simultaneously, creating interfaces that work on several psychological levels. Combining laws produces effects greater than the sum of their parts because each law addresses a different aspect of user cognition and behavior. Fitts Law and the Von Restorff Effect combine powerfully when primary buttons are both large for easy targeting and visually distinctive for attention capture. Hick Law and progressive disclosure work together by limiting visible choices while revealing additional options when needed, keeping initial screens simple while providing depth for advanced users."),
            para("Jakob Law and Miller Law combine to create navigation that is both familiar and manageable. By following platform conventions for navigation placement and structure while keeping the number of items within seven, designers create navigation that users can operate immediately without cognitive overload. The Goal Gradient Effect and Doherty Threshold combine to create addictive momentum by providing progress indicators that motivate completion while keeping response times under 400 milliseconds so users never lose the feeling of direct control over the interface."),
            para("However, sometimes laws suggest conflicting directions, and designers must prioritize based on context. Large buttons help satisfy Fitts Law but having too many of them violates Hick Law by increasing choice complexity. When laws conflict, the designer must understand the specific context, user goals, and task complexity to determine which principle should take precedence. This is where deep understanding of UX laws separates novice designers from experts. Experts do not just know the laws; they understand their interactions, limitations, and contextual priority rules, allowing them to make nuanced design decisions that serve real user needs."),
            callout("Beware of Conflicts", "Sometimes laws suggest conflicting directions. Large buttons help Fitts but too many violate Hick. When laws conflict, prioritize based on context and user goals. Deep understanding of laws includes knowing their interactions, limitations, and when one should take precedence over another."),
            subheading("Powerful Law Combinations"),
            bullets([
                ("Fitts and Von Restorff", "Make primary buttons both large for easy targeting and visually distinctive for attention capture. This combination creates impossible to miss, easy to click calls to action that guide users naturally toward desired actions."),
                ("Hick and Progressive Disclosure", "Limit visible choices and reveal additional options when needed. This keeps initial screens simple while providing depth for advanced users, reducing decision time without limiting functionality."),
                ("Jakob and Miller", "Follow platform conventions while keeping navigation within seven items. This creates familiar yet manageable navigation that users can operate immediately without training."),
                ("Goal Gradient and Doherty", "Provide progress indicators while keeping responses under 400 milliseconds. This combination creates addictive momentum that motivates completion and maintains the feeling of direct control."),
                ("Pareto and Fitts", "Apply the strongest Fitts Law optimizations to the 20 percent of features that handle 80 percent of user interactions. This focuses design effort where it has the greatest impact on user experience."),
                ("Tesler and Hick", "Push complexity to the backend so the user interface presents simple choices. This combination hides irreducible complexity from users while maintaining powerful functionality.")
            ]),
            quote("The most sophisticated UX designs apply multiple laws simultaneously, creating interfaces that work on several psychological levels. Combining laws produces effects greater than the sum of their parts because each law addresses a different aspect of user cognition.")
        ]),
        section("ux-laws-5", "Misconceptions, Teaching, and Team Application", "lightbulb", [
            para("As with any widely referenced framework, the Laws of UX are subject to misconceptions and oversimplifications. Recognizing these helps designers apply the laws more accurately. UX laws describe how users typically behave, not how they must behave, and context and individual differences moderate how strongly a law applies. Miller Law is often misinterpreted as a hard limit of seven items, but the original research studied recall from short term memory, not recognition from a visual display. Users can recognize from larger sets when items are well organized, which is a very different cognitive process."),
            para("Hick Law has limits that designers must understand. It applies to simple, independent decisions, but for complex comparisons, more options can actually help users evaluate by providing reference points and context. Fitts Law is not just about size; distance and movement direction matter equally, and edge positioned menus benefit from the infinite width effect where users can throw the cursor toward the edge without precise aiming. Treat UX laws as heuristics rather than commandments, using them to inform decisions and generate hypotheses, but always validating through testing with real users."),
            para("One of the most effective ways to deepen your understanding of UX laws is to teach them to others. Explaining these principles forces you to articulate the reasoning behind design decisions. When the whole team understands UX laws, discussions become more productive and move from subjective preference to evidence based reasoning. Create a checklist of UX laws to reference during design reviews, evaluating alignment with relevant principles. Create posters or cheat sheets summarizing UX laws with examples for quick consultation during design work. Host sessions where team members present one UX law with real world examples from your product."),
            callout("Nuanced Understanding", "Treat UX laws as heuristics rather than commandments. Use them to inform decisions and generate hypotheses, but always validate through testing with real users. A nuanced understanding of each law limitations is as important as knowing its core insight."),
            subheading("Teaching and Applying UX Laws in Teams"),
            bullets([
                ("Design Review Checklists", "Create a checklist of UX laws to reference during reviews. Each review should evaluate alignment with relevant principles, moving discussions from subjective preference to evidence based reasoning."),
                ("Visual References", "Create posters or cheat sheets summarizing UX laws with examples for quick consultation during design work. Visual references keep principles top of mind and accessible to the whole team."),
                ("Case Study Analysis", "Regularly analyze products through the lens of UX laws to identify which principles contribute to their usability. This practice builds pattern recognition and deepens understanding."),
                ("Law Referenced Reviews", "In design reviews, cite specific laws when explaining decisions. Say Fitts Law suggests this button should be larger instead of saying it feels too small. This builds a shared vocabulary for design critique."),
                ("Peer Learning Sessions", "Host informal sessions where team members present one UX law with product examples. Teaching deepens understanding and builds a culture of evidence based design."),
                ("Lunch and Learn Programs", "Organize regular lunch and learn sessions focused on UX laws and principles. Consistent exposure reinforces learning and keeps the team aligned on design standards.")
            ]),
            output("When UX laws become part of your team shared vocabulary, design decisions move from subjective preference to evidence based reasoning. The best way to master UX laws is to share them. Each time you explain a principle to someone else, you deepen your own understanding and build a culture of evidence based design."),
            quote("The best way to master UX laws is to share them. Each time you explain a principle to someone else, you deepen your own understanding and build a culture of evidence based design that elevates the entire team.")
        ])
    ]
})

print(f"Generated {len(notes)} notes")
# Write output
with open("/Users/Abdulsalam/Downloads/hyyungnotes/src/lib/notes-individual-c.ts", "w") as f:
    f.write("export const NOTES_C: any[] = [")
    for i, note in enumerate(notes):
        if i > 0:
            f.write(",\n\n")
        # else first note
        if i == 0:
            f.write("\n")
        f.write(build_note(note))
    f.write("\n];\n")

print("File written successfully!")
