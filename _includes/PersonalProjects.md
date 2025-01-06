<h2 id="personalprojects" style="margin: 2px 0px -15px;">Personal Projects</h2>

<div class="personal-projects">
<ol class="project-list" style="list-style-type: none; padding-left: 0;">

{% for link in site.data.PersonalProjects.main %}

<li>
<div class="pub-row" style="display: flex; align-items: flex-start; margin-bottom: 20px;">
  <!-- 이미지 섹션 -->
  <div class="col-sm-3 abbr" style="flex: 0 0 150px; margin-right: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width: 100%; max-width: 150px; height: auto; border-radius: 5px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
    {% endif %}
  </div>
  
  <!-- 텍스트 섹션 -->
  <div class="col-sm-9" style="flex: 1;">
      <div class="title" style="font-weight: bold; font-size: 18px; color: #007bff; margin-bottom: 5px;">
        <a href="{{ link.github }}" style="text-decoration: none;">{{ link.title }}</a>
      </div>
      <div class="description" style="font-size: 14px; color: #555; margin-bottom: 10px;">{{ link.description }}</div>
      <div class="links">
        {% if link.github %} 
        <a href="{{ link.github }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size: 12px; margin-top: 5px; color: white; background-color: #007bff; border: none; border-radius: 3px; padding: 5px 10px;">GitHub</a>
        {% endif %}
      </div>
  </div>
</div>
</li>

{% endfor %}

</ol>
</div>
