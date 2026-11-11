#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Helper CLI para adicionar novas matérias e insights ao Motionflix.
Pode ser executado diretamente pelo terminal ou pelo arquivo NOVO_INSIGHT.bat.
"""

import sys
import os
import json
import re
import datetime
import subprocess

INSIGHTS_FILE = os.path.join(os.path.dirname(__file__), "..", "insights_data.js")

CATEGORIES = {
    "1": ("Inteligência Artificial", "from-purple-500 to-indigo-600"),
    "2": ("Repositórios Open Source", "from-emerald-500 to-teal-600"),
    "3": ("Workflows & Ferramentas", "from-cyan-500 to-blue-600"),
    "4": ("Mercado & Tendências", "from-amber-500 to-rose-600")
}

def prompt_input(label, default=""):
    suffix = f" [{default}]" if default else ""
    val = input(f"{label}{suffix}: ").strip()
    return val if val else default

def main():
    print("=" * 65)
    print(" ⚡ MOTIONFLIX INSIGHTS · Cadastrar Nova Matéria / Artigo")
    print("=" * 65)
    
    title = prompt_input("1. Título da matéria")
    if not title:
        print("Erro: Título obrigatório!")
        return

    print("\nCategorias disponíveis:")
    print("  [1] 🤖 Inteligência Artificial")
    print("  [2] 📦 Repositórios Open Source")
    print("  [3] 🛠️ Workflows & Ferramentas")
    print("  [4] 💡 Mercado & Tendências")
    cat_choice = prompt_input("Escolha a categoria (1-4)", "1")
    category, badge_color = CATEGORIES.get(cat_choice, CATEGORIES["1"])

    read_time = prompt_input("2. Tempo estimado de leitura", "3 min de leitura")
    summary = prompt_input("3. Resumo da matéria (lide em 1 a 2 frases)")
    
    print("\n4. Principais Insights / Takeaways (digite até 3 lições rápidas):")
    t1 = prompt_input("  - Insight 1")
    t2 = prompt_input("  - Insight 2")
    t3 = prompt_input("  - Insight 3")
    takeaways = [t for t in [t1, t2, t3] if t]

    print("\n5. Conteúdo completo (digite uma linha de texto ou parágrafo):")
    content = prompt_input("  Texto da matéria", summary)

    ref_title = prompt_input("\n6. Nome da fonte ou repositório (ex.: GitHub / Artigo)")
    ref_url = prompt_input("   URL do link de referência")
    
    tags_raw = prompt_input("\n7. Tags separadas por vírgula", category)
    tags = [t.strip() for t in tags_raw.split(",") if t.strip()]

    cover_img = prompt_input("\n8. URL da imagem de capa (deixe em branco para usar padrão)", 
                             "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80")

    today_str = datetime.date.today().strftime("%d de %B de %Y")
    # Replace month names to Portuguese
    months = {
        "January": "Janeiro", "February": "Fevereiro", "March": "Março", "April": "Abril",
        "May": "Maio", "June": "Junho", "July": "Julho", "August": "Agosto",
        "September": "Setembro", "October": "Outubro", "November": "Novembro", "December": "Dezembro"
    }
    for en, pt in months.items():
        today_str = today_str.replace(en, pt)

    new_insight = {
        "id": f"ins-{int(datetime.datetime.now().timestamp())}",
        "title": title,
        "slug": re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-'),
        "category": category,
        "badgeColor": badge_color,
        "date": today_str,
        "readTime": read_time,
        "author": "Daniel Souza",
        "authorAvatar": "assets/daniel_souza.jpg",
        "authorInstagram": "https://www.instagram.com/7danielsouza/",
        "coverImage": cover_img,
        "summary": summary,
        "keyTakeaways": takeaways if takeaways else [summary],
        "contentHtml": f"""
      <p class="text-lg text-slate-300 leading-relaxed mb-6 font-medium">{summary}</p>
      <div class="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 my-4">
        {content}
      </div>
        """.strip(),
        "relatedLinks": [{"title": ref_title or "Link de Referência", "url": ref_url}] if ref_url else [],
        "tags": tags
    }

    # Load insights_data.js and prepend
    with open(INSIGHTS_FILE, "r", encoding="utf-8") as f:
        code = f.read()

    match = re.search(r'const DEFAULT_INSIGHTS = \[\s*', code)
    if not match:
        print("Erro: Não foi possível localizar DEFAULT_INSIGHTS em insights_data.js")
        return

    insert_pos = match.end()
    insight_json = json.dumps(new_insight, ensure_ascii=False, indent=2)
    # Indent it nicely
    indented_json = "  " + insight_json.replace("\n", "\n  ") + ",\n"
    
    updated_code = code[:insert_pos] + indented_json + code[insert_pos:]

    with open(INSIGHTS_FILE, "w", encoding="utf-8") as f:
        f.write(updated_code)

    print("\n✅ Matéria salva com sucesso em insights_data.js!")

    push_choice = prompt_input("\nDeseja publicar e sincronizar agora no GitHub Pages? (s/n)", "s").lower()
    if push_choice in ["s", "sim", "y", "yes"]:
        print("\n🚀 Enviando para o GitHub (main e gh-pages)...")
        repo_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
        subprocess.run(["git", "add", "insights_data.js"], cwd=repo_dir)
        subprocess.run(["git", "commit", "-m", f"feat(insight): {title[:50]}"], cwd=repo_dir)
        subprocess.run(["git", "push", "origin", "main"], cwd=repo_dir)
        subprocess.run(["git", "checkout", "gh-pages"], cwd=repo_dir)
        subprocess.run(["git", "merge", "main"], cwd=repo_dir)
        subprocess.run(["git", "push", "origin", "gh-pages"], cwd=repo_dir)
        subprocess.run(["git", "checkout", "main"], cwd=repo_dir)
        print("\n🎉 Publicado com sucesso! A matéria já estará visível em:")
        print("   👉 https://mjdanielsouza.github.io/motionflix/insights.html")

if __name__ == "__main__":
    main()
