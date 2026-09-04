<h2 id="publications" class="publications-heading">Publications</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr">
    {% if link.image %} 
    <img src="{{ link.image | relative_url }}" alt="{{ link.title }} teaser" class="teaser img-fluid z-depth-1">
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
    {% endif %}
  </div>
  <div class="col-sm-9">
      <div class="title">
        {% if link.pdf %}
        <a href="{{ link.pdf | relative_url }}" target="_blank" rel="noopener noreferrer">{{ link.title }}</a>
        {% elsif link.page %}
        <a href="{{ link.page }}" target="_blank" rel="noopener noreferrer">{{ link.title }}</a>
        {% else %}
        {{ link.title }}
        {% endif %}
      </div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em></div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf | relative_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener noreferrer">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener noreferrer">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener noreferrer">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener noreferrer">BibTex</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i class="pub-note">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

{% endfor %}

</ol>
</div>
