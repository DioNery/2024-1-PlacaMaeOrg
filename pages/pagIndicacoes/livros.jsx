import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/pagSecundarias.module.css';

const Livros = () => {
  const livros = [
    { 
      src: '/livro1.png',
      href: 'https://placamae.org/wp-content/uploads/2021/08/Evoluamos_Placamãe.Org_.pdf', // Preencha com o link do livro 1
      alt: 'Livro 1',
      className: styles.selecionar
    },
    { 
      src: '/livro2.png',
      href: 'https://placamae.org/wp-content/uploads/2020/05/Segurança-Digital.PlacaMae.Org-e-CEPI-FGV-Direito.SP_.pdf', // Preencha com o link do livro 2
      alt: 'Livro 2',
      className: styles.selecionar
    },
    { 
      src: '/livro3.png',
      href: 'https://placamae.org/wp-content/uploads/2022/06/Cartilha-Seguranca-da-informacao.FCAP_compressed.pdf', // Preencha com o link do livro 3
      alt: 'Livro 3',
      className: styles.selecionar
    },
    { 
      src: '/livro4.png',
      href: 'https://www.amazon.com.br/face-oculta-história-bullying-cyberbullying/dp/8502083848/ref=sr_1_1?adgrpid=1148990329982091&dib=eyJ2IjoiMSJ9.9q3uKutE50qywdMvDpdlgY1dmMhBQfvaPq4UNDuKfm4xt4AKcyQ6ju_GjYaXv90huRrKoV02c7FlBaqqQkCMTXiwC-Nv1CsPF7rjKl0fLvNFv2ZCcMqYR5nFxKZAcCIqtTIIAU65JRHL6QUMa8KrsiT7pph1DmoF2H7a14tjngwWxFkMcp4O5qYvLBrlos5G_3Apmjnr2rzhYuECk0xb5Svqgau4d9FHKdNZP8x2q1J4fOQEe8MlAd4oO6--ScIMpmrUiGVol9NgFLF-CubZpp2YfylE8C_gSXaN-KpUQQQ.i0QkM3UKjdHDz6CdfqmJcmX1doPiB-uM5RKkpcgWWB0&dib_tag=se&hvadid=71812059845428&hvbmt=be&hvdev=c&hvlocphy=147819&hvnetw=o&hvqmt=e&hvtargid=kwd-71812420273022%3Aloc-20&hydadcr=5627_13210340&keywords=face+oculta+livro&qid=1717115166&sr=8-1', // Preencha com o link do livro 4
      alt: 'Livro 4',
      className: styles.selecionar
    },
    { 
      src: '/livro5.png',
      href: 'https://www.estantevirtual.com.br/jorgeamado/benjamin-horta-e-euclides-j-vargas-bullying-etica-e-direitos-humanos-3368075570?msclkid=61e1283bd8421411d73e4e62c1d37453&utm_source=bing&utm_medium=cpc&utm_campaign=Shopping%20Base&utm_term=4579946971044398&utm_content=Todos%20o%20Acervo', // Preencha com o link do livro 5
      alt: 'Livro 5',
      className: styles.selecionar
    },
    { 
      src: '/livro6.png',
      href: 'https://www.amazon.com.br/Bullying-Mentes-perigosas-nas-escolas/dp/8525061522/ref=sr_1_1?crid=THDNXY7C60DU&dib=eyJ2IjoiMSJ9.CJ-yyGXBkPNHiUMwBJ6KiP70UEwUzu_9xEivG_DCFMV7RYq7KuJJUVe9JKfROQFgmGUDpH0Mb5xnjI892hl5w3fuEwivGmVw4RTfZRxt3_SKsIe9eSYzynyannlojb0j8-K9amCJYQQta6hZ3IICS5WrKwKaqgHRB2Wgc6wgkfAaP45Bs4q31X8gmgc-FPM8Hiby7zfA1koVVF4GHfo1krPkvmiMlbWt6RzkjKpVYr_shN4K_na22xIFbEXwLu-MvCkyIdLIfjrzMGUn1kqitU9XyfZWZ3RZs7PzgQuw0WM.ljWz37dZ5dPJJLfhziSXBWGFtIQ9EjDZVppPt1xio9k&dib_tag=se&keywords=bullying+mentes+perigosas+na+escola&qid=1717115344&sprefix=bullying+mentes%2Caps%2C257&sr=8-1', // Preencha com o link do livro 6
      alt: 'Livro 6',
      className: styles.selecionar
    },
    { 
      src: '/livro7.png',
      href: 'https://www.amazon.com.br/Se-Fosse-com-Você/dp/8506057515/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=41PGY9IUB7SL&dib=eyJ2IjoiMSJ9.pr5cp6VO7edj8664X2Uous9k59nU3K8XZUtUAGkpFmN5AwouYcYE1jC9gjbPaGw6nhoQ7HjYfvTKqT3d4rz02bDZE3FQgl-TlqwAMmUxp1a6wjGNKJnk9Nx_Ha1bhK3SjgPWcjXEE_tmGGOSpvHQYsDk_CLjdO44iM2Td23criTfPSAHc8Mp7aCEsTM83-kPQFYVZtcSjdpFO_BWgWffv4J3dU7s9ESl_XDbKy13zDkqVJm3XxKEfBKunOG2GQt-6P_eas5l8VRGiHlDsoJmNkKo4f3tYTv-JzuKD2_9Wu0.StT2Fo7XWZeNjiGYO19TWVf8nTYYswSdgGKqTBD41O4&dib_tag=se&keywords=e+se+fosse+com+voce&qid=1717115427&sprefix=e+se+fosse+com+voce%2Caps%2C310&sr=8-1', // Preencha com o link do livro 7
      alt: 'Livro 7',
      className: styles.selecionar
    },
    { 
      src: '/livro8.png',
      href: 'https://www.amazon.com/Cyberbullying-Social-within-Educational-Institutions/dp/147582582X', // Preencha com o link do livro 8
      alt: 'Livro 8',
      className: styles.selecionar
    },
  ];
  const [loadedImages, setLoadedImages] = useState([]);

  // Função para lidar com o carregamento de imagens
  const handleImageLoad = (index) => {
    // Adicione o índice da imagem ao array de imagens carregadas
    setLoadedImages((prevLoadedImages) => [...prevLoadedImages, index]);
  };

  return (
    <div>
      <p className={styles.texto1}>Dicas de leitura</p>
      <div className={styles.texto2}>
        <p>Livros gratuitos e autorias do placamae:</p>
        <div className={styles.horizontalAlign}>
          {livros.slice(0, 3).map((livro, index) => (
            <a key={index} href={livro.href} target="_blank" rel="noopener noreferrer">
              <div className={styles.componente1}>
                <Image
                  src={livro.src}
                  alt={livro.alt}
                  width={100}
                  height={100}
                  onLoad={() => handleImageLoad(index)} // Chame a função handleImageLoad no evento onLoad da imagem
                  className={loadedImages.includes(index) ? styles.loaded : styles.loading} // Use a classe styles.loaded se a imagem estiver carregada, senão use styles.loading
                />
              </div>
            </a>
          ))}
        </div>
        <p>Recomendação de compras:</p>
        <div className={styles.horizontalAlign}>
          {livros.slice(3).map((livro, index) => (
            <a key={index} href={livro.href} target="_blank" rel="noopener noreferrer">
              <div className={styles.componente1}>
                <Image
                  src={livro.src}
                  alt={livro.alt}
                  width={100}
                  height={100}
                  onLoad={() => handleImageLoad(index + 3)} // O índice para o segundo conjunto de livros começa em 3
                  className={loadedImages.includes(index + 3) ? styles.loaded : styles.loading} // Use a classe styles.loaded se a imagem estiver carregada, senão use styles.loading
                />
              </div>
            </a>
          ))}
        </div>
      </div>
      <a href='/pagIndicacoes/indicacoes' className={styles.link}>Voltar</a>
    </div>
  );
};

export default Livros;

