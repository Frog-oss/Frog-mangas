// Lista de volumes de cada mangá
const volumes = {
    dragonball: [
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8RntX33uIc53i-G4ofy5TRybHg6z2LrQ9g&s", nome: "Volume 1",
        link: "https://drive.google.com/file/d/1SqsKHykv5ZJl6gHRqMVQrKTzVY335u9w/preview" },
        { img: "https://m.media-amazon.com/images/I/61qQ0TWwYzL._AC_UF1000,1000_QL80_.jpg", nome: "Volume 2",
        link: "https://drive.google.com/file/d/1b-aDiJ01u22FvKXan1STePgvwLj29SQZ/preview" }
    ],
    vilandSaga: [
        { img: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_p4uugvjt7p6e93tqi1hh3kkt7p/-S897-FWEBP", nome: "Volume 1",
        link: "https://drive.google.com/file/d/1Ex3uLJVw3yr_owRFcj4xGUrHRwWz_MdL/preview" },
        { img: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_00hqkvda6t4un9auaj5m7l0t34/-S897-FWEBP", nome: "Volume 2",
        link: "https://drive.google.com/file/d/1HWpdQb-Nvej-hsvVmBNLZfEcVjYNQR-I/preview" }
    ],
    bleach: [
        { img: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_noplm1mskh41145o8m7aos191j/-S897-FWEBP", nome: "Volume 1",
        link: "https://drive.google.com/file/d/10dXt2Hx8EhW5xza26QJPWAPieWOv56bK/preview" },
        { img: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_i88vu3455h3dte5sd7v18psv5b/-S897-FWEBP", nome: "Volume 2",
        link: "https://drive.google.com/file/d/10hPmpoLtiABEpXSOrjXOPuIbqk22Gxc0/preview" }
    ],
    onepiece: [
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7UbWrUXxLfSw5obAOU0IOx1cGB-7tLFk3g&s", nome: "Volume 1",
        link: "https://drive.google.com/file/d/11EpJaweVmnqEHVItoB5bcaF2xq9Meqcw/preview" },
        { img: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_romhaq9rg57vvckdg5vkj45834/-S897-FWEBP", nome: "Volume 2",
        link: "https://drive.google.com/file/d/11HHVQYqr2VyxTdFSo8sJbVFxaXhgjUzJ/preview" }
    ],
     sakamotoDays: [
        { img: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_es2if13f8506j6hn3680t2gu3d/-S897-FWEBP", nome: "Volume 1",
        link: "https://drive.google.com/file/d/1QdAea5zBGSjVqbSTCkpSnWzMGvwVIjA6/preview" },
        { img: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_rt8k4otatd4jtbh3p0mo34v42d/-S897-FWEBP", nome: "Volume 2",
        link: "https://drive.google.com/file/d/1Qb4LfEj_PD3m0qMHU6e2qtk_n8tj_ZR9/preview" }
    ],
      blueLock: [
        { img: "https://m.media-amazon.com/images/I/81Q7410NNYL._UF894,1000_QL80_.jpg", nome: "Volume 1",
        link: "https://drive.google.com/file/d/1GeN7oQqECXtVuQZdTfNTWifdTg-ABbrt/preview" },
        { img: "https://m.media-amazon.com/images/I/81zEBy8yA+L._UF894,1000_QL80_.jpg", nome: "Volume 2",
        link: "https://drive.google.com/file/d/1GUsMl9oJMmMUfPc69IBhKehWF-ZxPtuI/preview" }
    ],
      hunterXHunter: [
        { img: "https://m.media-amazon.com/images/I/91W4gCWVdOL._UF894,1000_QL80_.jpg", nome: "Volume 1",
        link: "https://drive.google.com/file/d/1hfKnodSwFv-AZw_FB5YOjzZfbT8vLy4Q/preview" },
        { img: "https://m.media-amazon.com/images/I/71kSq30ef5L._AC_UF1000,1000_QL80_.jpg", nome: "Volume 2",
        link: "https://drive.google.com/file/d/1hm8K-xSHbrOhru6YOMjZmNEq3w0sT-sh/preview" }
    ],
      blackClover: [
        { img: "https://m.media-amazon.com/images/I/91WgpA0pjOL._AC_UF1000,1000_QL80_.jpg", nome: "Volume 1",
        link: "https://drive.google.com/file/d/1C2zlQMQpSRRmHUWni5lEcBZN7FDRSqp3/preview" },
        { img: "https://m.media-amazon.com/images/I/91IOp9RvOxL._AC_UF1000,1000_QL80_.jpg", nome: "Volume 2",
        link: "https://drive.google.com/file/d/1C8eh0sqI16VMcsIfbMog8ZAb4moS1VdP/preview" }
    ],
      recordsofRagnarok: [
        { img: "https://www.newpop.com.br/wp-content/uploads/2021/07/NewPOP_Ragnarok_01.jpg", nome: "Volume 1",
        link: "https://drive.google.com/file/d/1LvccyN0UvK40nzu3OtjDttXY7tCi58zZ/preview" },
        { img: "https://www.newpop.com.br/wp-content/uploads/2021/11/NewPOP_Ragnarok_02.jpg", nome: "Volume 2",
        link: "https://drive.google.com/file/d/1LzQCkkcKZtnYo7ZsXCkMyt33Bht6kZ_j/preview" }
    ],

    bokunoHero: [
        { img: "https://www.jbchost.com.br/editorajbc/wp-content/uploads/2016/09/MHA-01-Capa-1-300x456.jpg", nome: "Volume 1",
        link: "https://drive.google.com/file/d/1-9i29mjRPxUELLqQ8P3OHKMVFPnMZ5d3/preview" },
        { img: "https://www.jbchost.com.br/editorajbc/wp-content/uploads/2016/12/MHA-02-Capa_p-300x459.jpg", nome: "Volume 2",
        link: "https://drive.google.com/file/d/1-DMF117D5wOiTYUkD3ibU0Au0YtlXbFG/preview" }
    ],
      frieren: [
        { img: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_eeug4hput57un7pkh60eeupn1e/-S897-FWEBP", nome: "Volume 1",
        link: "https://drive.google.com/file/d/10TCujam9pwdHxb6Gdy6TIkL2xCAqhH6F/preview" },
        { img: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_jmu4u71q296sr8532q1bhqd935/-S897-FWEBP", nome: "Volume 2",
        link: "https://drive.google.com/file/d/10TUPbs24PqOn-FF-JNWaO9X7GC4EqbfY/preview" }
    ],
      uzumaki: [
        { img: "https://m.media-amazon.com/images/I/81ykP5VrDXL._AC_UF1000,1000_QL80_.jpg", nome: "Volume 1",
        link: "https://drive.google.com/file/d/1-pVjCmLdSSmchGIgvJ2drQv8QZIpg12v/preview" },
        { img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1511901907i/20319131.jpg", nome: "Volume 2",
        link: "https://drive.google.com/file/d/1-gr2_hhb2C91T6IaZh9CUEBqyIFRD6QY/preview" }
    ],
      onePunchMan: [
        { img: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_7i6mh330r13r5e023ldosim535/-S897-FWEBP", nome: "Volume 1",
        link: "https://drive.google.com/file/d/1KxlATsGMTqpxMbYJ38_303Kef6N_f0Cx/preview" },
        { img: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_7ekueld7np1o70d7ivq4kn813j/-S897-FWEBP", nome: "Volume 2",
        link: "https://drive.google.com/file/d/1L4eQk4JhGoiv6ad_aPUQEV0dArFos2ch/preview" }
    ],
      deathNote: [
        { img: "https://www.jbchost.com.br/editorajbc/wp-content/uploads/2013/06/dn-black-edition-01-300x456.jpg", nome: "Volume 1",
        link: "https://drive.google.com/file/d/1D7R42jqrF47FXQNbMpEE7mMmwQFmicwf/preview" },
        { img: "https://www.jbchost.com.br/editorajbc/wp-content/uploads/2013/07/dn-black-edition-02-300x456.jpg", nome: "Volume 2",
        link: "https://drive.google.com/file/d/1DE8zGNOxzx7eMISLOI3s3TZ0pcDOiXOG/preview" }
    ],
    punpun: [
        { img: "https://www.jbchost.com.br/editorajbc/wp-content/uploads/2018/12/Boa-Noite-Punpun-01-Capa_p-300x455.jpg", nome: "Volume 1",
        link: "https://drive.google.com/file/d/12IJKgfE6lx7xbJsnwXWNLTUuTB17wGOt/preview" },
        { img: "https://www.jbchost.com.br/editorajbc/wp-content/uploads/2018/12/Boa-Noite-Punpun-02-Capa_p-300x455.jpg", nome: "Volume 2",
        link: "https://drive.google.com/file/d/12IT89ukjrv_p4rLdswY5FinWZ-K9mWKD/preview" }
    ],
        jujutsuKaisen: [
        { img: "https://m.media-amazon.com/images/I/81jxwTCbzTL._UF894,1000_QL80_.jpg", nome: "Volume 1",
        link: "https://drive.google.com/file/d/1WC9LyvsqkgRXjyyRAhL6F3vLddxRAvgs/preview" },
        { img: "https://m.media-amazon.com/images/I/813W+sQOKkL._AC_UF1000,1000_QL80_.jpg", nome: "Volume 2",
        link: "https://drive.google.com/file/d/1VijMST7pSMUGG6y198UZNKx4HPZPBXEQ/preview" }
    ],
     dugeonMeshi: [
        { img: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_pgoo2ep1n119t08p832oc58b69/-S897-FWEBP", nome: "Volume 1",
        link: "https://drive.google.com/file/d/1J9xOOBQs6dGbUGwq-CrOwFSi1LCY05MP/preview" },
        { img: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_g7v4g7d4ol0nffhe5mtn4sb343/-S897-FWEBP", nome: "Volume 2",
        link: "https://drive.google.com/file/d/1J1jbIwhmcI2C1qOei5xtk-YeHZtl9VnW/preview" }
    ],
};

const params = new URLSearchParams(window.location.search);
const manga = params.get("manga");

// Atualiza os volumes na página
if (manga && volumes[manga]) {
    document.getElementById("titulo-manga").innerText = "Volumes de " + manga.toUpperCase();
    carregarVolumes(manga);
} else {
    document.getElementById("titulo-manga").innerText = "Mangá não encontrado";
}

// Função para carregar os volumes na página
function carregarVolumes(manga) {
    const listaVolumes = document.getElementById("lista-volumes");
    listaVolumes.innerHTML = "";

    volumes[manga].forEach(volume => {
        const figure = document.createElement("figure");

        const link = document.createElement("a");
        link.href = "#";
        link.onclick = function() {
            exibirPDF(volume.link);
            return false;
        };

        const img = document.createElement("img");
        img.src = volume.img;
        img.alt = volume.nome;

        const caption = document.createElement("figcaption");
        caption.classList.add("volume-caption");
        caption.textContent = volume.nome;

        link.appendChild(img);
        figure.appendChild(link);
        figure.appendChild(caption);

        listaVolumes.appendChild(figure);
    });
}

// Função para exibir o PDF dentro do site
function exibirPDF(url) {
    const pdfViewer = document.getElementById("pdf-viewer");
    pdfViewer.innerHTML = `<iframe src="${url}" width="100%" height="600px"></iframe>`;
}

// Função para voltar à página inicial
function voltarParaInicio() {
    window.history.back();
}
