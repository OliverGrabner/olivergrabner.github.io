import { useState } from 'react';

interface ResearchItem {
  title: string;
  image: string;
  type: 'paper' | 'poster';
  authors?: string[];
  venue?: string;
  abstract?: string;
  pdfLink?: string;
  codeLink?: string;
  bibtex?: string;
  event?: string;
  description?: string;
  fullPoster?: string;
}

export default function Research() {
  const [expandedAbstract, setExpandedAbstract] = useState<number | null>(null);
  const [expandedBibtex, setExpandedBibtex] = useState<number | null>(null);

  const items: ResearchItem[] = [
    {
      type: 'paper',
      title: 'Z-Scores: A Metric for Linguistically Assessing Disfluency Removal',
      authors: ['Maria Teleki', 'Sai Janjur', 'Haoran Liu', 'Oliver Grabner', 'Ketan Verma', 'Thomas Docog', 'Xiangjue Dong', 'Lingfeng Shi', 'Cong Wang', 'Stephanie Birkelbach', 'Jason Kim', 'Yin Zhang', 'James Caverlee'],
      venue: '<strong>ICASSP 2026</strong>',
      image: '/research/zscore.png',
      abstract: 'Evaluating disfluency removal in speech requires more than aggregate token-level scores. Traditional word-based metrics such as precision, recall, and F1 (E-Scores) capture overall performance but cannot reveal why models succeed or fail. We introduce Z-Scores, a span-level linguistically-grounded evaluation metric that categorizes system behavior across distinct disfluency types (EDITED, INTJ, PRN). Our deterministic alignment module enables robust mapping between generated text and disfluent transcripts, allowing Z-Scores to expose systematic weaknesses that word-level metrics obscure. By providing category-specific diagnostics, Z-Scores enable researchers to identify model failure modes and design targeted interventions -- such as tailored prompts or data augmentation -- yielding measurable performance improvements. A case study with LLMs shows that Z-scores uncover challenges with INTJ and PRN disfluencies hidden in aggregate F1, directly informing model refinement strategies.',
      pdfLink: 'https://arxiv.org/pdf/2509.20319',
      codeLink: 'https://github.com/mariateleki/zscore',
      bibtex: `@inproceedings{teleki25_zscores,
  title = {Z-Scores: A Metric for Linguistically Assessing Disfluency Removal},
  author = {Maria Teleki and Sai Janjur and Haoran Liu and Oliver Grabner and Ketan Verma and Thomas Docog and Xiangjue Dong and Lingfeng Shi and Cong Wang and Stephanie Birkelbach and Jason Kim and Yin Zhang and James Caverlee},
  year = {2025},
  booktitle = {ICASSP},
}`
    },
    {
      type: 'paper',
      title: 'DRES: Benchmarking LLMs for Disfluency Removal',
      authors: ['Maria Teleki', 'Sai Janjur', 'Haoran Liu', 'Oliver Grabner', 'Ketan Verma', 'Thomas Docog', 'Xiangjue Dong', 'Lingfeng Shi', 'Cong Wang', 'Stephanie Birkelbach', 'Jason Kim', 'Yin Zhang', 'James Caverlee'],
      venue: '<strong>Preprint 2026</strong>',
      image: '/research/dres.png',
      abstract: 'Disfluencies -- such as \'um,\' \'uh,\' interjections, parentheticals, and edited statements -- remain a persistent challenge for speech-driven systems, degrading accuracy in command interpretation, summarization, and conversational agents. We introduce DRES (Disfluency Removal Evaluation Suite), a controlled text-level benchmark that establishes a reproducible semantic upper bound for this task. DRES builds on human-annotated Switchboard transcripts, isolating disfluency removal from ASR errors and acoustic variability. We systematically evaluate proprietary and open-source LLMs across scales, prompting strategies, and architectures. Our results reveal that (i) simple segmentation consistently improves performance, even for long-context models; (ii) reasoning-oriented models tend to over-delete fluent tokens; and (iii) fine-tuning achieves near state-of-the-art precision and recall but harms generalization abilities. We further present a set of LLM-specific error modes and offer nine practical recommendations (R1-R9) for deploying disfluency removal in speech-driven pipelines. DRES provides a reproducible, model-agnostic foundation for advancing robust spoken-language systems.',
      pdfLink: 'https://arxiv.org/pdf/2509.20321',
      codeLink: 'https://github.com/mariateleki/dres',
      bibtex: `@inproceedings{teleki25_dres,
  title = {DRES: Benchmarking LLMs for Disfluency Removal},
  author = {Maria Teleki and Sai Janjur and Haoran Liu and Oliver Grabner and Ketan Verma and Thomas Docog and Xiangjue Dong and Lingfeng Shi and Cong Wang and Stephanie Birkelbach and Jason Kim and Yin Zhang and James Caverlee},
  year = {2025},
  booktitle = {ICASSP},
}`
    },
    {
      type: 'poster',
      title: 'Conversational Speech Reveals Structural Robustness Failures in LLMs',
      event: 'NLP Symposium 2026',
      image: '/research/dres-icon.png',
      fullPoster: '/research/dres-symposium-poster.pdf',
      description: 'Benchmarking LLMs for disfluency removal in speech-driven systems.'
    },
    {
      type: 'poster',
      title: 'Evaluating the Impact of Synthetic Disfluency Insertion on LLM Summarization',
      event: 'Student Research Week 2025',
      image: '/research/srw-icon.png',
      fullPoster: '/research/srw-poster.png',
      description: 'Evaluated the effects disfluent speech tokens have on LLM summarization performance.'
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
          Research
        </h2>

        <div className="space-y-12">
          {items.map((item, index) => (
            <div key={index} className="border-b pb-8 last:border-b-0" style={{ borderColor: 'rgba(193, 95, 60, 0.15)' }}>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="md:col-span-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto object-cover rounded-sm"
                    style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                  />
                </div>

                <div className="md:col-span-3 flex flex-col">
                  {item.type === 'poster' && (
                    <div className="mb-2">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-gray-700 font-medium"
                        style={{
                          fontSize: '12px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(193, 95, 60, 0.07)',
                          border: '1px solid rgba(193, 95, 60, 0.15)',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        Poster
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.title}
                  </h3>

                  {item.type === 'paper' && (
                    <>
                      <p className="text-base text-gray-700 mb-2" style={{ fontFamily: 'Lora, serif' }}>
                        {item.authors!.map((author, idx) => (
                          <span key={idx}>
                            {author === 'Oliver Grabner' ? (
                              <strong style={{ color: '#C15F3C', fontWeight: 'bold' }}>{author}</strong>
                            ) : (
                              author
                            )}
                            {idx < item.authors!.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </p>

                      <p
                        className="text-sm text-gray-600 mb-4"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        dangerouslySetInnerHTML={{ __html: item.venue! }}
                      />

                      <div className="flex gap-4 flex-wrap mt-auto">
                        <button
                          onClick={() => setExpandedAbstract(expandedAbstract === index ? null : index)}
                          className="inline-flex items-center gap-2 px-4 py-2 border text-sm font-medium rounded transition-colors duration-200"
                          style={{ borderColor: '#C15F3C', color: '#C15F3C', fontFamily: 'Inter, sans-serif' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#C15F3C';
                            e.currentTarget.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#C15F3C';
                          }}
                        >
                          {expandedAbstract === index ? 'Hide Abstract' : 'Abstract'}
                        </button>

                        <a
                          href={item.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border text-sm font-medium rounded transition-colors duration-200"
                          style={{ borderColor: '#C15F3C', color: '#C15F3C', fontFamily: 'Inter, sans-serif' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#C15F3C';
                            e.currentTarget.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#C15F3C';
                          }}
                        >
                          PDF
                        </a>

                        {item.codeLink && (
                          <a
                            href={item.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 border text-sm font-medium rounded transition-colors duration-200"
                            style={{ borderColor: '#C15F3C', color: '#C15F3C', fontFamily: 'Inter, sans-serif' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#C15F3C';
                              e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#C15F3C';
                            }}
                          >
                            Code
                          </a>
                        )}

                        <button
                          onClick={() => setExpandedBibtex(expandedBibtex === index ? null : index)}
                          className="inline-flex items-center gap-2 px-4 py-2 border text-sm font-medium rounded transition-colors duration-200"
                          style={{ borderColor: '#C15F3C', color: '#C15F3C', fontFamily: 'Inter, sans-serif' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#C15F3C';
                            e.currentTarget.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#C15F3C';
                          }}
                        >
                          {expandedBibtex === index ? 'Hide BibTeX' : 'BibTeX'}
                        </button>
                      </div>
                    </>
                  )}

                  {item.type === 'poster' && (
                    <>
                      <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.event}
                      </p>

                      <p className="text-base text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                        {item.description}
                      </p>

                      <div className="mt-auto">
                        <a
                          href={item.fullPoster}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border text-sm font-medium rounded transition-colors duration-200"
                          style={{ borderColor: '#C15F3C', color: '#C15F3C', fontFamily: 'Inter, sans-serif' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#C15F3C';
                            e.currentTarget.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#C15F3C';
                          }}
                        >
                          View Poster
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {expandedAbstract === index && item.abstract && (
                <div className="mt-4 p-4 bg-gray-50 rounded border" style={{ borderColor: 'rgba(193, 95, 60, 0.15)' }}>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Lora, serif', fontSize: '15px' }}>
                    {item.abstract}
                  </p>
                </div>
              )}

              {expandedBibtex === index && item.bibtex && (
                <div className="mt-4 p-4 bg-gray-50 rounded border font-mono text-sm" style={{ borderColor: 'rgba(193, 95, 60, 0.15)' }}>
                  <pre className="whitespace-pre-wrap">{item.bibtex}</pre>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(item.bibtex!);
                      alert('BibTeX copied to clipboard!');
                    }}
                    className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 border text-xs font-medium rounded transition-colors duration-200"
                    style={{ borderColor: '#C15F3C', color: '#C15F3C', fontFamily: 'Inter, sans-serif' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#C15F3C';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#C15F3C';
                    }}
                  >
                    Copy to Clipboard
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
