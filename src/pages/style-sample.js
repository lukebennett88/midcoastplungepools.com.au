import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const StyleSamplePage = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 py-8 w-full">
        <article className="max-w-md w-full">
          <h1 className="leading-none mb-0">Style sample</h1>
          <p>
            <small>Posted by Luke Bennett on November 12, 2018</small>
          </p>
          <div>
            <p>
              This is a style sample for a website made by{' '}
              <a href="https://lukebennett.com.au">Luke Bennett</a>. The purpose
              of this post is to make it easier to style the website by showing
              all of the common HTML elements in one place.
            </p>
            <p>
              This paragraph is for checking line length and showing how text
              wraps. It has to be very long so that it will wrap even on wide
              screen devices. Is the text very legible? Should it be larger or
              smaller? Maybe a different typeface? What about line height of
              paragraphs, a little too much is better than not enough. Check the
              margin and padding while you’re at it.
            </p>
            <ul>
              <li>This is an unordered list</li>
              <li>There are three bullet points here</li>
              <li>Do they look OK?</li>
              <ul>
                <li>This is an unordered list</li>
                <li>There are three bullet points here</li>
                <li>Do they look OK?</li>
                <ul>
                  <li>This is an unordered list</li>
                  <li>There are three bullet points here</li>
                  <li>Do they look OK?</li>
                  <ul>
                    <li>This is an unordered list</li>
                    <li>There are three bullet points here</li>
                    <li>Do they look OK?</li>
                    <ul>
                      <li>This is an unordered list</li>
                      <li>There are three bullet points here</li>
                      <li>Do they look OK?</li>
                    </ul>
                  </ul>
                </ul>
              </ul>
            </ul>
            <p>
              What about <strong>bold</strong> text? Maybe some <em>italics</em>
              . Don’t forget some nice “curly quotes” (not all fonts have these,
              so it’s something to consider.)
            </p>
            <h2>Level 2 heading</h2>
            <p>
              Here’s a bit more text to see what it looks like under a{' '}
              <code className="language-text">h2</code>.
            </p>
            <p>
              Does the margin on the top and bottom of the heading look good to
              you?
            </p>
            <h3>Level 3 heading</h3>
            <ol>
              <li>
                What about an <em>ordered</em> list?
              </li>
              <li>Three items should be enough for testing right?</li>
              <li>Yes I think three is probably enough</li>
              <ol>
                <li>
                  What about an <em>ordered</em> list?
                </li>
                <li>Three items should be enough for testing right?</li>
                <li>Yes I think three is probably enough</li>
                <ol>
                  <li>
                    What about an <em>ordered</em> list?
                  </li>
                  <li>Three items should be enough for testing right?</li>
                  <li>Yes I think three is probably enough</li>
                  <ol>
                    <li>
                      What about an <em>ordered</em> list?
                    </li>
                    <li>Three items should be enough for testing right?</li>
                    <li>Yes I think three is probably enough</li>
                    <ol>
                      <li>
                        What about an <em>ordered</em> list?
                      </li>
                      <li>Three items should be enough for testing right?</li>
                      <li>Yes I think three is probably enough</li>
                    </ol>
                  </ol>
                </ol>
              </ol>
            </ol>
            <p>
              You’re not going to use this on every website, about about styling{' '}
              <code className="language-text">code text</code>? This should be
              in a monospace font.
            </p>
            <p>
              You might also want to do syntax highlighting, so here is a block
              of javascript for you to layout.
            </p>
            <div className="gatsby-highlight" data-language="js">
              <pre className="language-js">
                <code className="language-js">
                  <span className="token comment">
                    // Javascript code with syntax highlighting.
                  </span>
                  {'\n'}
                  <span className="token keyword">var</span>{' '}
                  <span className="token function-variable function">fun</span>{' '}
                  <span className="token operator">=</span>{' '}
                  <span className="token keyword">function</span>{' '}
                  <span className="token function">lang</span>
                  <span className="token punctuation">(</span>l
                  <span className="token punctuation">)</span>{' '}
                  <span className="token punctuation">{'{'}</span>
                  {'\n'}
                  {'  '}dateformat<span className="token punctuation">.</span>
                  i18n <span className="token operator">=</span>{' '}
                  <span className="token function">require</span>
                  <span className="token punctuation">(</span>
                  <span className="token string">"./lang/"</span>{' '}
                  <span className="token operator">+</span> l
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  {'\n'}
                  {'  '}
                  <span className="token keyword">return</span>{' '}
                  <span className="token boolean">true</span>
                  <span className="token punctuation">;</span>
                  {'\n'}
                  <span className="token punctuation">{'}'}</span>
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <p>Next up, blockquotes.</p>
            <blockquote>
              <p>
                This is what a <em>blockquote</em> looks like.
              </p>
              <p>
                I’ll add a second paragraph here that is long enough to cause
                line wrapping. Once again, check for padding and margin, font
                size etc.
              </p>
            </blockquote>
            <p>Here’s a full-width image:</p>
            <p>
              <img
                src="https://lukebennett.com.au/img/uploads/un-monsieur-truste-en-costume.png"
                alt="Un Monsieur Triste En Costume"
              />
            </p>
            <p>
              Further paragraphs of text. And yet more text. A bit more text
              too, for good measure.
            </p>
            <p>
              Further paragraphs of text. And yet more text. A bit more text
              too, for good measure.
            </p>
            <p>Here’s a screenshot-type image, with a caption:</p>
            <figure>
              <img
                src="https://mattgemmell.com/images/mail_favorite_mailboxes/mail_move_to_favorite.jpg"
                title="A caption goes here."
              />
              <figcaption>This is what a figcaption looks like</figcaption>
            </figure>
            <p>
              Further paragraphs of text. And yet more text, followed by a
              horizontal rule.
            </p>
            <hr />
            <h2>Another heading</h2>
            <p>Further paragraphs of text. And yet more text.</p>
            <p>Further paragraphs of text. And yet more text.</p>
            <h3>Tables</h3>
            <p>Here is what a table will look like:</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Instruments</th>
                  <th>Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Josh Homme</td>
                  <td>lead vocals, guitar, piano, bass</td>
                  <td>1996 – present</td>
                </tr>
                <tr>
                  <td>Troy Van Leeuwen</td>
                  <td>
                    guitar, lap steel guitar, keyboards, synthesizers,
                    percussion, backing vocals, bass
                  </td>
                  <td>2002 – present</td>
                </tr>
                <tr>
                  <td>Michael Shuman</td>
                  <td>bass, synthesizers, backing vocals</td>
                  <td>2007 – present</td>
                </tr>
                <tr>
                  <td>Dean Fertita</td>
                  <td>
                    keyboards, synthesizers, guitar, percussion, backing vocals
                  </td>
                  <td>2007 – present</td>
                </tr>
                <tr>
                  <td>Jon Theodore</td>
                  <td>drums, percussion, samplers</td>
                  <td>2013 – present</td>
                </tr>
              </tbody>
            </table>
            <p>Former members</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Instruments</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alfredo Hernández</td>
                  <td>drums, percussion</td>
                  <td>1998 – 1999</td>
                </tr>
                <tr>
                  <td>Nick Oliveri</td>
                  <td>bass, co-lead and backing vocals</td>
                  <td>1998 – 2004</td>
                </tr>
                <tr>
                  <td>Mark Lanegan</td>
                  <td>co-lead and backing vocals, keyboards</td>
                  <td>2001 – 2005</td>
                </tr>
                <tr>
                  <td>Dave Grohl</td>
                  <td>drums, percussion</td>
                  <td>2001 – 2002</td>
                </tr>
                <tr>
                  <td>Joey Castillo</td>
                  <td>drums, percussion</td>
                  <td>2002 – 2012</td>
                </tr>
                <tr>
                  <td>Alain Johannes</td>
                  <td>bass, backing vocals, guitars</td>
                  <td>2005 – 2007</td>
                </tr>
                <tr>
                  <td>Natasha Shneider</td>
                  <td>keyboards, backing vocals</td>
                  <td>2005 – 2006</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <p>
            <strong>Luke Bennett</strong> is a front end developer from Port
            Macquarie.{' '}
            <a href="https://github.com/lukebennett88">
              You can find him on GitHub
            </a>
          </p>
          <p />
          <Link to="/">← Home</Link>
        </article>
      </div>
    </Layout>
  );
};

export default StyleSamplePage;
