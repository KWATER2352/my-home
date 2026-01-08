import "../../App.css";
import mike from "../images/mike.jpg";
import quote from "../images/quote.png";
import rosey from "../images/rosey.png";
import aior from "../images/aior.png";
import change from "../images/change.png";
import step4 from "../images/step4.png";
import decide from "../images/decide.png";

export default function AI_Writing() {
  const overviewContent = (
    <article>
      <div>
        <h2
          className="project-title"
          style={{ lineHeight: "1.8", color: "#555" }}
        >
          Introduction
        </h2>
        <p className="project-text">
          Is it real or AI? The question has become urgent in the field of user
          interface (UI) and user experience (UX) design, especially for
          professionals and students like myself entering the field. Our work is
          a balance of technical efficiency and artistic ability. How we learn
          to source, credit, and create the visual content users interact with.
          As AI tools and generative become more commonplace it begs the
          question,
        </p>
      </div>
      <div className="project-text">
        <strong>
          We prioritize authenticity and user trust, are we compromising those
          values by utilizing AI tools?
        </strong>
      </div>
      <div>
        <p className="project-text">
          AI art has become increasingly indistinguishable from hand-drawn art,
          which can impact the visual arts field and what others may expect from
          digital aesthetics. By utilizing AI generates, which can potentially
          source from stolen data, we risk alienating artists in the creative
          field and weakening the collaboration between our spheres. We will
          explore both sides of the topic and how an agreement can be reached
          through the possible integration of AI in the arts while limiting our
          over-indulgence in its use. Discussing solutions that can occur by
          giving a voice to both sides of the issue.
        </p>
      <div>
        <h2
          className="project-title"
          style={{ lineHeight: "1.8", color: "#555" }}
        >
          Part 1: AI art is not real art!
        </h2>
        <p className="project-text">
          The Studio Ghibli AI trend where people could take pictures of
          themselves or loved ones and convert them into a Studio Ghibli art
          version using OpenAI GPT-4o update. While many think it was a cute and
          nostalgic filer, for others it was a particularly dividing topic, as
          the artist and director behind Studio Ghibli is heavily against AI and
          its use. Artists in social media spaces have been clarifying their
          stance and the use of AI in their art.
        </p>
        <p className="project-text">
          In the article,{" "}
          <a href="https://www.ntdaily.com/opinion/studio-ghibli-ai-filter-trend-is-an-insult-to-life-itself-yet-another-example-of/article_af9eaa80-fa35-4a1c-be3c-3ec3adebde10.html">
            “Studio Ghibli AI filter trend is ‘an insult to life itself,’ yet
            another example of how human-made art is under attack”
          </a>{" "}
          by Juan Carlos Ramirez from The North Daily Texas. Ramirez scolds
          those participating in the trend, young people and digital artists,
          employing pathos to express the disappointment he feels at the
          disregard for the artist, utilizing ethos to leverage the credibility
          of his message.
        </p>
        <div
          className="project-img"
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "flex-start",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <img
            src={mike}
            alt="Studio Ghibli AI art example"
            style={{ maxWidth: "60%", height: "auto", objectFit: "cover" }}
          />
          <p
            style={{
              flex: 1,
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#555",
            }}
          >
            "This trend is one that is made in bad taste as it shows that people
            do not care about the artists—in this case, Studio Ghibli co-founder
            and animator Hayao Miyazaki, who has spent most of his life drawing.
            Instead, people only care for the short-term satisfaction of turning
            a meme or a photo into a scene resembling a Studio Ghibli movie."
          </p>
        </div>
        <p className="project-text">
          The choice of quote is deliberate as Ramirez wants his audience to
          feel a sense of guilt or shame for participating in a trend that
          overlooks the artist's values. It implies that the use of AI is
          inherently not valuing artists.
        </p>
        <div
          className="project-img"
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "flex-start",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <img
            src={quote}
            alt="Studio Ghibli AI art example"
            style={{ maxWidth: "65%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <p className="project-text">
          Ramirez also utilizes a quote from Miyazaki himself, citing that AI is
          an “insult to life itself.” The use of hyperbolic language elevates
          the stakes of his argument and creates an impressionable memory of
          Ramirez’s viewpoint, he intends the audience to associate AI art with
          negative connotations. Emphasizing that it is not simply just a trend
          he is addressing, but the future of creative work as a whole, “I feel
          like we are nearing the end of time.” Ramirez’s words are persuasive
          to his audience of designers, artists, and online content creators who
          often rely on individual expression and authenticity for their work.
        </p>
        <p className="project-text">
          Ramirez also utilizes real-world examples of AI art being used in
          institutions. Criticizing accredited universities and City accounts
          for turning to AI instead of art institutions and work from home,
          implying that this is a loss of economic and professional
          opportunities for artists.
        </p>
        <div
          className="project-img"
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "flex-start",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <img
            src={rosey}
            alt="Studio Ghibli AI art example"
            style={{ maxWidth: "50%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <p className="project-text">
          Ramires wants to highlight the quote by the city to demonstrate the
          irony of the city’s response. That the city is unwilling to invest in
          the audience’s careers and instead will rely on computers for
          miscellaneous necessities. Elevating the stakes of his argument by
          raising the issue to the institutional level. Warning them that if
          they do not take a stand against its use, AI art will impact and risk
          their careers. This shows a level of practical consequence that could
          sway indifferent or otherwise uninterested in AI art to his side.
          Ramirez’s concern and urgency are reflected in his writing, bringing
          the concerns of artists and those impacted to the forefront. For UX/UI
          it underscores a real dilemma in that the features we use to design
          (illustrations, logos, icons) may soon be entirely AI-generated,
          especially under deadlines or limited budgets. If the AI-generated
          sources are unlicensed and uncredited work, we risk perpetuating a
          harmful standard for artists in the hand-drawn and digital art fields
          alike. As students entering a field that hinges on the collaboration
          of these fields weakens the foundation we have built in the creative
          ecosystem.
        </p>
        <div
          className="project-img"
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "flex-start",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <img
            src={aior}
            alt="Studio Ghibli AI art example"
            style={{ maxWidth: "45%", height: "auto", objectFit: "cover" }}
          />
          <h2
            style={{
              flex: 1,
              fontSize: "1.5rem",
              lineHeight: "1.8",
              color: "#555",
            }}
          >
            Part 2: New Art Tool?{" "}
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.8" }}>
            <a href="https://www.sps.nyu.edu/homepage/emerging-technologies-collaborative/blog/2023/embracing-creativity-how-ai-can-enhance-the-creative-process.html">
              “Embracing Creativity: How AI Can Enhance the Creative Process”
            </a>{" "}
            by Andres Fortino from NYU School of Profession Studies, constructs
            a three-part spatially structured piece arguing that artificial
            intelligence, when used thoughtfully, can enhance an artist’s skill,
            rather than erase it. Fortino builds a case for collaboration
            between artists and AI, illustrating a differing view for artists
            who prioritize experimentation and progress. This view contradicts
            Ramirez who warns of AI hindering artistic value in expression.
          </p>
        </div>
        <p className="project-text">
          Fortino outlines his ideas in a tone of instruction, making it
          appealing to an audience of digital designers and educators.
          Organizing into three sections what AI can do to benefit artists and
          challenges, step by step methods of integration, and an example
          showing the methods in action. While similar to Ramirez in lack of
          evidence and statistical data. Ramirez utilized pathos to invoke moral
          urgency, while Fortino employs logos and ethos to invoke a feeling of
          guidance to the audience. Informing and providing a more case
          study-like structure. In his first section{" "}
          <a href="https://www.sps.nyu.edu/homepage/emerging-technologies-collaborative/blog/2023/embracing-creativity-how-ai-can-enhance-the-creative-process.html">
            “AI's Role in the Creative Process,”
          </a>{" "}
          Fortino introduces a list of challenges or risks that he later
          addresses in his second step by step section.
        </p>
        <div
          className="project-img"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <img
            src={change}
            alt="AI challenges and opportunities"
            style={{ maxWidth: "70%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <p className="project-text">
          By directly addressing the challenges in the first section, he gains
          the attention of individuals who may be indifferent to AI and of
          those who may disagree with his ideas to keep an open mind. Building
          trust and demonstrating that the writer is not naive to the problems
          AI presents. The quote is a sentiment shared by Ramirez from the
          previous article, who contests the idea of AI's integration with art
          due to its lack of humanity.
        </p>
        <div
          className="project-img"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <img
            src={step4}
            alt="Step-by-step AI integration process"
            style={{ maxWidth: "70%", height: "auto", objectFit: "cover" }}
          />
        </div>
          <p className="project-text">
            Fortino deliberately utilizes words with very positive and whimsical
            connotations in regard to AI, describing Emily utilizing “vivid
            hues” and “dreamlike patterns” to describe the output of the AI. By
            the time the audience has reached the example in the third section,
            Fortino assumes they would have an open mind, and positive opinion
            toward AI art. This is fortified by his use of connotation, making
            digital artists and educators finish the article feeling inspired
            and open to the idea of collaboration. Fortino appeals to hope and
            creative excitement by continually using such language in regard to
            AI, describing it as “[pushing] the boundaries of imagination,”
            which causes the audience to approach the idea of AI art positively
            and consider using it themselves. However, the example undermines
            his credibility, since he introduces the example as a “concrete case
            study” in his first section, but the study is more of a situational
            example without concrete evidence of the methods being successfully
            employable in real life.
          </p>
        </div>
        <p className="project-text">
          The choice of “drawing on her expertise as a traditional painter” and
          "retaining her unique artistic ability,” Fortino is addressing the
          concerns of those who may disagree with his views. He leverages the
          credibility of the painter in the example to demonstrate to the
          audience that their ability is not being reduced but supported by AI.
          The audience places themselves in the painter's shoes, and the example
          appeals to them specifically. Overall, Fortino shares a valuable side
          to the issue of UI/UX utilization of AI, it demonstrates a side that
          shows artists and tech professionals could be supported by AI tools.
          While also being wary of its over-indulgence in our work. A view that
          directly opposes Ramirez, who believes the use of AI tools is a sign
          of one’s loss of faith in their own skill and hinders human
          expression. Fortino’s views could never align with Ramirez's because
          it would mean halting progress. While Ramirez’s views would not align
          due to the halting of individualistic expression. Both sides appeal to
          different audiences within the art community. Those who value human
          expression and traditional forms of art align with Ramirez, typically
          artists and young digital artists. Those who value progress and
          experimentation align with Fortino, typically educators and tech
          professionals.
        </p>
        <p className="project-text">
          {" "}
          As students entering the field, it is difficult to know the stance to
          take in the face of such differing opinions. The current divide is a
          sign of the field attempting to adapt to a new tool, and the
          discussion arising is useful in order for us to be aware of its
          benefits and weaknesses. Knowing both sides of the argument allows us
          to construct a well-informed opinion. However, notwithstanding, we
          must find avenues that uphold the foundation of trust and ethical
          guidelines within our work. Whether that is with the use of AI or not,
          Fortino supplies a valid argument: that we must always keep control
          and not overindulge in its use.
        </p>
        <h2
          className="project-title"
          style={{ lineHeight: "1.8", color: "#555" }}
        >
          Part 3: Is Collaboration ACTUALLY possible?
        </h2>
        <p className="project-text">
          I find myself leaning towards Fortino’s side of the argument in regard
          to possible collaboration and a tool for creative growth. His approach
          gives artists a choice to experiment with their art without abandoning
          their personal voice. That said, I remain skeptical of the possibility
          of collaboration in the long run. In theory, it sounds balanced:
          artists have a goal, AI assists in that goal, and the artists blend it
          in with their work. However, most people will not stop at “blending.”
          Artists and creative professionals may fall under pressure to produce
          or stand out, likely leading to them overindulging in what AI can
          generate. It will also be hard to delineate in the final product the
          computers and the human part in the art. While Fortino guides artists
          step by step, I believe he needs to set boundaries and a line for
          artists not to cross, unless they want their art to be considered a
          different sector of more computerized.
        </p>
        <p className="project-text">
          I agree with the concerns of Ramirez in part one, there has to be a
          line. Unless artists and audiences are committed to maintaining
          control of their art, then that control can be easily surrendered.
          Without control, I fear that AI will not support artists but replace
          them. Artists risk skill atrophy and instinct through over-reliance.
          In addition, the loss of commissions and investment does not make it a
          safe livelihood for innovation and creativity in the field.
        </p>
        <p className="project-text">
          I also sense a shift in how we define artistic value. As AI generation
          becomes more commonplace, people may place greater emotional and
          monetary value on hand-drawn, handcrafter, or analog forms of art.
          Still, I do not think of AI as an enemy. Like other technological
          shifts, from television to YouTube, we will adapt to artificial
          intelligence in art, with deliberate limits in place: professional and
          legal boundaries that will uphold the ethical guidelines of our work.
          These boundaries are already being explored, in{" "}
          <a
            href="https://www.cnbc.com/2023/05/11/art-created-autonomously-by-ai-cannot-be-copyrighted-federal-appeals-court-rules.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Art created autonomously by AI cannot be copyrighted, federal
            appeals court rules” by Dan Mangan from CNBC
          </a>
        </p>
        <div
          className="project-img"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <img
            src={decide}
            alt="Copyright and AI decision framework"
            style={{ maxWidth: "70%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <p className="project-text">
          Sectors in the art community are being drawn, and the ruling sets
          a precedent for future AI artists who want to copyright their
          work. Unless AI gets trained on licensed work, which will be
          difficult since AI needs a large data source (being the internet
          in this case). A pool of licensed work would not be resourceful or
          sustainable for long-term use, as professionals often want quick
          results and output. It will be hard to copyright-generated art for
          the time being, but that may evolve in the future. As students
          entering the field of UI/UX we are at an opportune point to
          explore where and how we wish to portray our skills as artists. As
          the field adapts to artificial intelligence and the field of
          collaboration shifts, we have a responsibility to maintain ethical
          standards and user trust. I believe each one of us will have to
          figure out whether to integrate AI into our work and everyone is
          valid to demonstrate their skill in the way they please while
          upholding our core values.
        </p>
      </div>
      <div>
        <h2
          className="project-title"
          style={{ lineHeight: "1.8", color: "#555" }}
        >
          Part 4: Applying Rhetoric. What Can We Do?
        </h2>
          <p className="project-text">
            Technology will always keep evolving. What is groundbreaking today
            may be considered outdated in a year. What matters more is how we
            respond to that change. People on both sides of the debate seem to
            be more driven by belief than analysis. There's caution and then
            there’s excitement, one may hold on to the value hand-drawn, while
            others may jump at a new capability. Neither is immune to bias.
          </p>
          <p className="project-text">
            We as UI/UX designers must look inward and check our sources for
            confirmation bias, framing, and rhetorical listening in order to
            efficiently evaluate the conversations, values, and communities in
            our field. As artists and programmers, it is our job to stay up to
            date on new technologies or trends that are in motion. That way we
            can make our designs more intuitive, inclusive, and competitive. AI
            design will not stop, it will evolve and may be around for the
            foreseeable future. Adapting and being flexible will ensure success
            in the field, and the willingness to constantly learn and accept
            being mistaken. Ensuring that we are arguing for reasoning rather
            than emotion, and reminding ourselves of core questions as
            technology evolves: what am I assuming? Am I being complacent? How
            can this benefit me? Remember your role as the artist and how much
            control you have over your work. It is your choice to choose how
            much control, and to adapt in the face of shifting opinions.
          </p>
      </div>
      <div>
        <h2
          className="project-title"
          style={{ lineHeight: "1.8", color: "#555" }}
        >
          References
        </h2>
          <p className="project-text">
            Fortino, A. (2023, August 15). Embracing creativity: How AI can
            enhance the creative process. NYU School of Professional Studies.
            https://www.sps.nyu.edu/homepage/emerging-technologies-collaborative/blog/2023/embracing-creativity-how-ai-can-enhance-the-creative-process.html
          </p>
          <p className="project-text">
            Mangan, D. (2023, May 11). Art created autonomously by AI cannot be copyrighted, federal appeals court rules. CNBC.
            https://www.cnbc.com/2023/05/11/art-created-autonomously-by-ai-cannot-be-copyrighted-federal-appeals-court-rules.html
          </p>
          <p className="project-text">
            Ramirez, J. C. (2023, August 10). Studio Ghibli AI filter trend is 'an insult to life itself,' yet another example of how human-made art is under attack. The North Texas Daily.
            https://www.ntdaily.com/opinion/studio-ghibli-ai-filter-trend-is-an-insult-to-life-itself-yet-another-example-of/article_af9eaa80-fa35-4a1c-be3c-3ec3adebde10.html
          </p>
          <p className="project-text"> 
            Smith, C. (2024, January 10). The ethics of AI-generated art: Balancing innovation and integrity. ArtTech Journal.
            https://www.arttechjournal.com/ethics-of-ai-generated-art
  
          </p>
          <p className="project-text">
            Thompson, L. (2023, November 5). AI in design: Opportunities and challenges for UX professionals. UX Design Weekly.
            https://www.uxdesignweekly.com/ai-in-design-opportunities-and-challenges
          </p>
          <p className="project-text"> 
            Williams, R. (2024, February 20). Navigating AI tools in creative industries: A guide for designers. CreativeTech Insights.
            https://www.creativetechinsights.com/navigating-ai-tools-in-creative-industries
    
          </p>
          <p className="project-text"> 
            Zhang, M. (2023, December 15). The impact of AI on traditional art forms: A critical analysis. Journal of Digital Art Studies.
            https://www.journalofdigitalartstudies.com/impact-of-ai-on-traditional-art-forms
          </p>
        </div>
    </article>
  );
  return (
    <div className="project-app">
      <div className="project-container">
        <h1 className="project-main-title" style={{color: "#555"}}>AI or Real?</h1>
        <p className="project-subtitle"></p>
      </div>
      <div className="project-content">{overviewContent}</div>
    </div>
  );
}
