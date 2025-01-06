<h2 id="personalprojects" style="margin: 2px 0px -15px;">Personal Projects</h2>

<div class="personal-projects">
<ol class="bibliography">

{% for link in site.data.PersonalProjects.main %}

<li>
<div class="pub-row" style="display: flex; align-items: flex-start; padding: 15px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); background-color: rgba(0, 0, 0, 0.8); margin-bottom: 20px;">

  <!-- 이미지 섹션 -->
  <div class="col-sm-3 abbr" style="flex: 0 0 150px; margin-right: 15px; position: relative;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width: 100%; max-width: 150px; height: auto; border-radius: 5px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
    {% endif %}
  </div>
  
  <!-- 텍스트 섹션 -->
  <div class="col-sm-9" style="flex: 1;">
      <div class="title" style="font-weight: bold; font-size: 18px; color: #00aaff; margin-bottom: 5px;">
        <a href="{{ link.code }}" style="text-decoration: none; color: #00aaff;">{{ link.title }}</a>
      </div>
      <div class="description" style="font-size: 14px; color: #ffffff; margin-bottom: 10px;">{{ link.description }}</div>
      <!-- 버튼 섹션 -->
      <div class="links" style="margin-top: 10px;">
        {% if link.pdf %} 
        <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px; background-color: transparent; color: #ffffff; border: 1px solid #ffffff; padding: 5px 10px; border-radius: 4px; text-decoration: none; margin-right: 5px;">PDF</a>
        {% endif %}
        {% if link.code %} 
        <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px; background-color: transparent; color: #ffffff; border: 1px solid #ffffff; padding: 5px 10px; border-radius: 4px; text-decoration: none; margin-right: 5px;">Code</a>
        {% endif %}
        {% if link.page %} 
        <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px; background-color: transparent; color: #ffffff; border: 1px solid #ffffff; padding: 5px 10px; border-radius: 4px; text-decoration: none; margin-right: 5px;">Project Page</a>
        {% endif %}
        {% if link.bibtex %} 
        <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px; background-color: transparent; color: #ffffff; border: 1px solid #ffffff; padding: 5px 10px; border-radius: 4px; text-decoration: none; margin-right: 5px;">BibTex</a>
        {% endif %}
      </div>
  </div>

</div>
</li>

{% endfor %}

</ol>
</div>
