<h2 id="personalprojects" style="margin: 2px 0px -15px;">Personal Projects</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.PersonalProjects.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px; margin-bottom: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="max-width: 200px; width: 100%; height: auto; object-fit: cover; display: block; margin: 0 auto;">
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title">
        {% if link.code %}
        <a href="{{ link.code }}">{{ link.title }}</a>
        {% else %}
        {{ link.title }}
        {% endif %}
      </div>
      <div class="author">{{ link.description }}</div>
    <div class="links">
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>
