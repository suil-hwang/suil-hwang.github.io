<h2 id="personalprojects" style="margin: 2px 0px -15px;">Personal Projects</h2>

<div class="personal-projects">
<ol class="project-list">

{% for link in site.data.PersonalProjects.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width: 100%; height: auto; border-radius: 5px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.github }}" style="font-weight: bold; font-size: 18px; color: #007bff;">{{ link.title }}</a></div>
      <div class="author" style="font-size: 14px; color: #555;">{{ link.authors }}</div>
      <div class="description" style="font-size: 14px; color: #555;">{{ link.description }}</div>
    <div class="links" style="margin-top: 5px;">
      {% if link.github %} 
      <a href="{{ link.github }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size: 12px; margin-right: 5px; color: white; background-color: #007bff; border: none; border-radius: 3px; padding: 5px 10px;">GitHub</a>
      {% endif %}
      {% if link.live_demo %} 
      <a href="{{ link.live_demo }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size: 12px; margin-right: 5px; color: white; background-color: #28a745; border: none; border-radius: 3px; padding: 5px 10px;">Live Demo</a>
      {% endif %}
      {% if link.docs %} 
      <a href="{{ link.docs }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size: 12px; margin-right: 5px; color: white; background-color: #6c757d; border: none; border-radius: 3px; padding: 5px 10px;">Documentation</a>
      {% endif %}
      {% if link.notes %} 
      <strong><i style="color: #e74c3c;">{{ link.notes }}</i></strong>
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>
