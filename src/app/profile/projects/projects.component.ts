import { Component, OnInit } from "@angular/core";
import { AppNames, AppType, LOGO } from "./customEnums";
import { Projects } from "./customInterfaces";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  listData$: Projects[] = [];
  stacksList: string[] = [];
  constructor() {}

  ngOnInit() {
    this.listData$ = [
      // CEVT
      {
        type: AppType.API,
        title: AppNames.CEVT_API,
        description:
          "API qui expose les données d'un ancien SI (monolith, servlet) en REST a base de scrapping",
        lienDemo:
          "http://146.59.195.214:8006/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config",
        lienGit: "https://gitlab.com/cevt-dashboard/cevt-serverside",
        logo: LOGO.API,
        stack: ["Spring boot", "Mongodb", "Docker"],
      },
      {
        type: AppType.WEB,
        title: AppNames.CEVT_WEB,
        description:
          "Interface/Couche par dessus le SI (deprecated) de la faculté de Saclay, pour fournir des données ( ex:  EDT ) en REST",
        lienDemo: "http://146.59.195.214:3000/#/login",
        lienGit: "https://gitlab.com/cevt-dashboard/cevt-clientside",
        logo: LOGO.WEB,
        stack: ["ReactJS"],
      },
      // FINANCE
      {
        type: AppType.API,
        title: AppNames.FINANCE_STOCK,
        description:
          "Micro Service, en rapport avec les stocks, tickers ... actions ! ",
        lienDemo:
          "http://146.59.195.214:8003/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config",
        lienGit: "https://github.com/picatsu-finance/stocks",
        logo: LOGO.API,
        stack: ["Spring boot", "Mongodb", "Docker"],
      },
      {
        type: AppType.API,
        title: AppNames.FINANCE_CRYPTO,
        description: "Micro Service, en rapport avec les cryptomonaies",
        lienDemo:
          "http://146.59.195.214:8001/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config",
        lienGit: "https://github.com/picatsu-finance/crypto",
        logo: LOGO.API,
        stack: ["Spring boot", "Mongodb", "Docker"],
      },
      {
        type: AppType.API,
        title: AppNames.FINANCE_FOREX,
        description: "Micro Service, en rapport avec le domaine du forex",
        lienDemo:
          "http://146.59.195.214:8002/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config",
        lienGit: "https://github.com/picatsu-finance/forex",
        logo: LOGO.API,
        stack: ["Spring boot", "Mongodb", "Docker"],
      },
      {
        type: AppType.API,
        title: AppNames.FINANCE_CUSTOM,
        description:
          "Micro Service, en rapport avec les produits custom : indices, options etc",
        lienDemo: "http://146.59.195.214:8004/swagger-ui.html",
        lienGit: "https://github.com/picatsu-finance/custom",
        logo: LOGO.API,
        stack: ["Spring boot", "Mongodb", "Docker"],
      },
      {
        type: AppType.API,
        title: AppNames.FINANCE_EARNINGS,
        description: "Micro Service, expose les dividendes et rentabilitées",
        lienDemo: "http://146.59.195.214:4000/api/",
        lienGit: "https://github.com/picatsu-finance/earnings-nestJs",
        logo: LOGO.API,
        stack: ["NestJs", "Docker"],
      },
      {
        type: AppType.API,
        title: AppNames.FINANCE_MONITORING,
        description: "Dashboard monitoring des microservices finances",
        lienDemo: "http://146.59.195.214:9090/wallboard",
        lienGit: "https://github.com/picatsu-finance/gateway",
        logo: LOGO.API,
        stack: ["Spring boot", "Spring cloud", "Mongodb", "Docker"],
      },
      {
        type: AppType.API,
        title: AppNames.FINANCE_WEB,
        description:
          "Web App du projet finance, expose plusieurs data ainsi que des alertes",
        lienDemo: "http://146.59.195.214:6541/pages/custom-basket/custom-menu",
        lienGit: "https://github.com/picatsu-finance/client-angular",
        logo: LOGO.API,
        stack: ["Angular", "NebularUi", "Docker"],
      },
      // DYSTOLAB

      {
        type: AppType.WEB,
        title: AppNames.DYSTOLAB_WEB,
        description:
          "Application permettant aux neurologues et aux kinésithérapeutes de suivre l'évolution de la dystonie cervicale de leurs patients",
        lienDemo: "https://dystolab-client.herokuapp.com/#/login",
        lienGit: "Private",
        logo: LOGO.API,
        stack: ["Angular", "Heroku"],
      },
    ];
    const mySet = new Set<string>();
    this.listData$.forEach((item) => {
      item.stack.forEach((s) => {
        mySet.add(s);
      });
    });
    this.stacksList = Array.from(mySet);
  }

  openLink(url: string) {
    window.open(url);
  }

  getTypeBadge(value: string) {
    switch (value) {
      case AppType.API:
        return "new";
      case AppType.WEB:
        return "proposal";
    }
  }
}
