<h2 id="personalprojects" style="margin: 2px 0px -15px;">Personal Projects</h2>

<div class="personal-projects">
<ul class="project-list" style="list-style-type: none; padding-left: 0;">

{% for link in site.data.PersonalProjects.main %}

<li>
<div class="pub-row">
  <!-- 이미지 섹션 -->
  <div class="col-sm-3 abbr" style="position: relative; padding-right: 15px; padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width: 100%; max-width: 200px; height: auto; border-radius: 5px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
    {% endif %}
  </div>
  
  <!-- 텍스트 섹션 -->
  <div class="col-sm-9" style="position: relative; padding-right: 15px; padding-left: 20px;">
      <div class="title" style="font-weight: bold; font-size: 18px; color: #007bff; margin-bottom: 5px;">
        <a href="{{ link.github }}" style="text-decoration: none;">{{ link.title }}</a>
      </div>
      <div class="description" style="font-size: 14px; color: #555; margin-bottom: 10px;">{{ link.description }}</div>
      <div class="links">
        {% if link.code %} 
        <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">
        Code</a>
        {% endif %}
      </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ul>
</div>
