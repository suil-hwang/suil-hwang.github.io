<h2 id="personalprojects" style="margin: 2px 0px -15px;">Personal Projects</h2>

<div class="PersonalProjects">
<ol class="project-list">

{% for link in site.data.PersonalProjects.main %}

<li>
<div class="project-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.github }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="description">{{ link.description }}</div>
    <div class="links">
      {% if link.github %} 
      <a href="{{ link.github }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">GitHub</a>
      {% endif %}
      {% if link.live_demo %} 
      <a href="{{ link.live_demo }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Live Demo</a>
      {% endif %}
      {% if link.docs %} 
      <a href="{{ link.docs }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Documentation</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>
