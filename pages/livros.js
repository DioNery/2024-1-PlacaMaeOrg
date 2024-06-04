import styles from '../styles/livro.module.css';

export default function PodCast() {
  return (
    <div>
      <p className={styles.texto1}>
      Dicas de leitura
      </p>

      <div className={styles.texto2}>
        <p>
        Livros gratuitos e autorias do placamae
        </p>
        <p>
        Recomendação de compras
        </p>
      </div>
    
      <div className={styles.livros1}>
          <a href='https://placamae.org/wp-content/uploads/2021/08/Evoluamos_Placamãe.Org_.pdf'>
            <button>
              <img src='/livro1.png' style={{position:'relative',bottom:"-20px"}} className={styles.selecionar}></img> 
            </button>
          </a>
          <a href='https://placamae.org/wp-content/uploads/2020/05/Segurança-Digital.PlacaMae.Org-e-CEPI-FGV-Direito.SP_.pdf'>
            <button>
              <img src='/livro2.png' className={styles.selecionar}></img>
            </button>
          </a>
          <a href='https://placamae.org/wp-content/uploads/2022/06/Cartilha-Seguranca-da-informacao.FCAP_compressed.pdf'>
            <button>
              <img src='/livro3.png' className={styles.selecionar}></img>
            </button>
          </a>
        </div>

        <img src='estante.png' className={styles.estante1}></img>

        <div className={styles.livros2}>
          <a href='https://www.amazon.com.br/face-oculta-história-bullying-cyberbullying/dp/8502083848/ref=sr_1_1?adgrpid=1148990329982091&dib=eyJ2IjoiMSJ9.9q3uKutE50qywdMvDpdlgY1dmMhBQfvaPq4UNDuKfm4xt4AKcyQ6ju_GjYaXv90huRrKoV02c7FlBaqqQkCMTXiwC-Nv1CsPF7rjKl0fLvNFv2ZCcMqYR5nFxKZAcCIqtTIIAU65JRHL6QUMa8KrsiT7pph1DmoF2H7a14tjngwWxFkMcp4O5qYvLBrlos5G_3Apmjnr2rzhYuECk0xb5Svqgau4d9FHKdNZP8x2q1J4fOQEe8MlAd4oO6--ScIMpmrUiGVol9NgFLF-CubZpp2YfylE8C_gSXaN-KpUQQQ.i0QkM3UKjdHDz6CdfqmJcmX1doPiB-uM5RKkpcgWWB0&dib_tag=se&hvadid=71812059845428&hvbmt=be&hvdev=c&hvlocphy=147819&hvnetw=o&hvqmt=e&hvtargid=kwd-71812420273022%3Aloc-20&hydadcr=5627_13210340&keywords=face+oculta+livro&qid=1717115166&sr=8-1'>
            <button>
              <img src='/livro4.png' className={styles.selecionar}></img>  
            </button>
          </a>
          <a href='https://www.estantevirtual.com.br/jorgeamado/benjamin-horta-e-euclides-j-vargas-bullying-etica-e-direitos-humanos-3368075570?msclkid=61e1283bd8421411d73e4e62c1d37453&utm_source=bing&utm_medium=cpc&utm_campaign=Shopping%20Base&utm_term=4579946971044398&utm_content=Todos%20o%20Acervo'>
            <button>
              <img src='/livro5.png' className={styles.selecionar}></img>
            </button>
          </a>     
          <a href='https://www.amazon.com.br/Bullying-Mentes-perigosas-nas-escolas/dp/8525061522/ref=sr_1_1?crid=THDNXY7C60DU&dib=eyJ2IjoiMSJ9.CJ-yyGXBkPNHiUMwBJ6KiP70UEwUzu_9xEivG_DCFMV7RYq7KuJJUVe9JKfROQFgmGUDpH0Mb5xnjI892hl5w3fuEwivGmVw4RTfZRxt3_SKsIe9eSYzynyannlojb0j8-K9amCJYQQta6hZ3IICS5WrKwKaqgHRB2Wgc6wgkfAaP45Bs4q31X8gmgc-FPM8Hiby7zfA1koVVF4GHfo1krPkvmiMlbWt6RzkjKpVYr_shN4K_na22xIFbEXwLu-MvCkyIdLIfjrzMGUn1kqitU9XyfZWZ3RZs7PzgQuw0WM.ljWz37dZ5dPJJLfhziSXBWGFtIQ9EjDZVppPt1xio9k&dib_tag=se&keywords=bullying+mentes+perigosas+na+escola&qid=1717115344&sprefix=bullying+mentes%2Caps%2C257&sr=8-1'>
            <button>
              <img src='/livro6.png' className={styles.selecionar} style={{position:'relative',bottom:'-5px'}}></img>
            </button>
          </a>
          <a href='https://www.amazon.com.br/Se-Fosse-com-Você/dp/8506057515/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=41PGY9IUB7SL&dib=eyJ2IjoiMSJ9.pr5cp6VO7edj8664X2Uous9k59nU3K8XZUtUAGkpFmN5AwouYcYE1jC9gjbPaGw6nhoQ7HjYfvTKqT3d4rz02bDZE3FQgl-TlqwAMmUxp1a6wjGNKJnk9Nx_Ha1bhK3SjgPWcjXEE_tmGGOSpvHQYsDk_CLjdO44iM2Td23criTfPSAHc8Mp7aCEsTM83-kPQFYVZtcSjdpFO_BWgWffv4J3dU7s9ESl_XDbKy13zDkqVJm3XxKEfBKunOG2GQt-6P_eas5l8VRGiHlDsoJmNkKo4f3tYTv-JzuKD2_9Wu0.StT2Fo7XWZeNjiGYO19TWVf8nTYYswSdgGKqTBD41O4&dib_tag=se&keywords=e+se+fosse+com+voce&qid=1717115427&sprefix=e+se+fosse+com+voce%2Caps%2C310&sr=8-1'>
            <button>
              <img src='/livro7.png' className={styles.selecionar}></img>
            </button>
          </a>
          <a href='https://www.amazon.com/Cyberbullying-Social-within-Educational-Institutions/dp/147582582X'>
            <button>
              <img src='/livro8.png' className={styles.selecionar}></img>
            </button>
          </a>
      </div>
        <img src='estante.png' className={styles.estante2}></img>     
      <a href='/indicacoes' className={styles.link}>Voltar</a>
    </div>
  );
}
