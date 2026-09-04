<h2 id="personalprojects" class="publications-heading">Personal Projects</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.PersonalProjects.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="margin-bottom: 15px;">
    {% if link.image %} 
    <img src="{{ link.image | relative_url }}" alt="{{ link.title }} teaser" class="teaser img-fluid z-depth-1" style="max-width: 200px; width: 100%; height: auto; object-fit: cover; display: block; margin: 0 auto;">
    {% endif %}
  </div>
  <div class="col-sm-9">
      <div class="title">
        {% if link.code %}
        <a href="{{ link.code }}" target="_blank" rel="noopener noreferrer">{{ link.title }}</a>
        {% elsif link.page %}
        <a href="{{ link.page }}" target="_blank" rel="noopener noreferrer">{{ link.title }}</a>
        {% else %}
        {{ link.title }}
        {% endif %}
      </div>
      <div class="author">{{ link.description }}</div>
    <div class="links">
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener noreferrer">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener noreferrer">Project Page</a>
      {% endif %}
      {% if link.pdf %} 
      <a href="{{ link.pdf | relative_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener noreferrer">PDF</a>
      {% endif %}
    </div>
  </div>
</div>
</li>

{% endfor %}

</ol>
</div>
