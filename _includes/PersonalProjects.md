<h2 id="personalprojects" style="margin: 2px 0px -15px; color: #ffffff;">Personal Projects</h2>

<div class="personal-projects">
<ul class="project-list" style="list-style-type: none; padding-left: 0;">

{% for link in site.data.PersonalProjects.main %}

<li style="margin-bottom: 20px; padding: 15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); background-color: rgba(0, 0, 0, 0.6);">
<div class="pub-row" style="display: flex; align-items: center;">

  <!-- 이미지 섹션 -->
  <div class="col-sm-3 abbr" style="flex: 0 0 150px; margin-right: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width: 100%; max-width: 150px; height: auto; border-radius: 5px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);">
    {% endif %}
  </div>
  
  <!-- 텍스트 섹션 -->
  <div class="col-sm-9" style="flex: 1;">
      <div class="title" style="font-weight: bold; font-size: 18px; color: #00aaff; margin-bottom: 5px;">
        <a href="{{ link.code }}" style="text-decoration: none; color: #00aaff;">{{ link.title }}</a>
      </div>
      <div class="description" style="font-size: 14px; color: #ffffff; margin-bottom: 10px;">{{ link.description }}</div>
      <!-- 버튼 섹션 -->
      <div class="links">
        {% if link.pdf %} 
        <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px; color: #ffffff; border: 1px solid #ffffff; padding: 5px 10px; border-radius: 4px; text-decoration: none; margin-right: 5px;">PDF</a>
        {% endif %}
        {% if link.code %} 
        <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px; color: #ffffff; border: 1px solid #ffffff; padding: 5px 10px; border-radius: 4px; text-decoration: none; margin-right: 5px;">Code</a>
        {% endif %}
        {% if link.page %} 
        <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px; color: #ffffff; border: 1px solid #ffffff; padding: 5px 10px; border-radius: 4px; text-decoration: none; margin-right: 5px;">Project Page</a>
        {% endif %}
        {% if link.bibtex %} 
        <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px; color: #ffffff; border: 1px solid #ffffff; padding: 5px 10px; border-radius: 4px; text-decoration: none; margin-right: 5px;">BibTex</a>
        {% endif %}
        {% if link.notes %} 
        <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
        {% endif %}
      </div>
  </div>

</div>
</li>

{% endfor %}

</ul>
</div>
