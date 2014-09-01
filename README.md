annoT
=====
This project is a web-based real-time text annotation tool. AnnoT (ˈænəʊ tiː) helps users to annotate text while they are writing.

How?
----
Go to our [demo](http://ewakowalczuk.github.io/annot/ "demo") page and start writing sentences. If you want to annotate a word hit the `tab` key after the first 2 or 3 letters. Automagically a typeahead box will appear which suggests entities for annotation. If they are not accurate, type on and the results will (hopefully) become more precise. Then select your prefered result by clicking on it (or by selecting it with `key up` or `key down` navigation and hitting `enter`).

The text will become a hyperlink and you can go on typing your text. The link can be hovered, which will fill the boxes at the bottom with the entity's description and image, currently sourced by [Wikidata](http://wikidata.org "wikidata")

Who?
---
This project was brainstormed and prototypically implemented during the hackathon of the [Web Intelligence Summer School 2014](http://www.emse.fr/~zimmermann/WI_2014_Site/ "wiss 2014"). Oh, and it [won](http://www.webpla.net/attachments/kreativcenter/7120d1310155290-petroleum-lampe-renovieren-petroleumlampe-sturmlaterne-raritaet-foto-bild-31444041.jpg "prize") the "Best Hackathon Project" Prize ;)

Why?
---
Text annotation is useful for different kinds of things. For example it's very useful for bloggers, who write articles to provide their readers with further explanations. It is also useful to disambiguate text by applying the correct annotations. Moreover a real-time approach, as implemented here, lowers the barrier for annotating text.

You may also want to have a look at our [short presentation](https://github.com/EwaKowalczuk/annot/raw/master/doc/Presentation.pdf "short presentation").

Next?
----------
Since this was implemented in the course of one day, the app is still quite buggy. Following there is a list of planned improvements:

  * browser compatibility (currently, works best in chrome)
  * improve UI: currently the following problems exist...
    *  if the user immediately hits `tab`at the beginning of the textbox, it "crashes"
    *  if the user wants to annotate a word, which is not the last word in the input-field, it "crashes"
    *  if the user wants to annotate a term consisting of multiple words, she should start the autocomplete-mode (i.e., hitting `tab`) while typing the first word. 
    *  lookup for suggestions has to be started immediately after hitting tab. currently the user has to type one more word
    *  annotating words in the second line of the input box is buggy (typeahead box shows at wrong location, etc.)
  * serialize annotated text as [JSON-LD](http://www.w3.org/TR/json-ld/ "json-ld") or [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/ "rdfa"), persist it and make it available through an endpoint.
  * use the [Open Annotation Ontology](http://www.openannotation.org/ "oa onto") for serialization description.
  * see also our [Issues](https://github.com/EwaKowalczuk/annot/issues "issues") for current open issues