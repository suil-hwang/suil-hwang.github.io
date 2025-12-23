<h2 id="personalprojects" style="margin: 2px 0px -15px;">Personal Projects</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.PersonalProjects.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width: 100%; height: auto; object-fit: cover;">
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
