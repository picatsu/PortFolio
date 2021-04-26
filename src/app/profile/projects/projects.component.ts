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

  constructor() {}

  ngOnInit() {
    this.listData$ = [
      // CEVT
      {
        type: AppType.API,
        title: AppNames.CEVT_API,
        description:
          "Interface/Couche par dessus le SI (deprecated) de la faculté de Saclay, pour fournir des données ( ex:  EDT ) en REST",
        lienDemo:
          "http://146.59.195.214:8006/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config",
        lienGit: "https://gitlab.com/cevt-dashboard/cevt-serverside",
        logo: LOGO.API,
        stack: ["Spring boot", "Mongodb", "Docker"],
      },
      {
        type: AppType.API,
        title: AppNames.CEVT_API,
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
        description: "",
        lienDemo:
          "http://146.59.195.214:8003/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config",
        lienGit: "https://github.com/picatsu-finance/stocks",
        logo: LOGO.API,
        stack: ["Spring boot", "Mongodb", "Docker"],
      },
      {
        type: AppType.API,
        title: AppNames.FINANCE_CRYPTO,
        description: "",
        lienDemo:
          "http://146.59.195.214:8001/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config",
        lienGit: "https://github.com/picatsu-finance/crypto",
        logo: LOGO.API,
        stack: ["Spring boot", "Mongodb", "Docker"],
      },
      {
        type: AppType.API,
        title: AppNames.FINANCE_FOREX,
        description: "",
        lienDemo:
          "http://146.59.195.214:8002/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config",
        lienGit: "https://github.com/picatsu-finance/forex",
        logo: LOGO.API,
        stack: ["Spring boot", "Mongodb", "Docker"],
      },
      {
        type: AppType.API,
        title: AppNames.FINANCE_CUSTOM,
        description: "",
        lienDemo: "http://146.59.195.214:8004/swagger-ui.html",
        lienGit: "https://github.com/picatsu-finance/custom",
        logo: LOGO.API,
        stack: ["Spring boot", "Mongodb", "Docker"],
      },
      {
        type: AppType.API,
        title: AppNames.FINANCE_EARNINGS,
        description: "",
        lienDemo: "http://146.59.195.214:4000/api/",
        lienGit: "https://github.com/picatsu-finance/earnings-nestJs",
        logo: LOGO.API,
        stack: ["NestJs", "Docker"],
      },
      {
        type: AppType.API,
        title: AppNames.FINANCE_MONITORING,
        description: "",
        lienDemo: "http://146.59.195.214:9090/wallboard",
        lienGit: "https://github.com/picatsu-finance/gateway",
        logo: LOGO.API,
        stack: ["Spring boot", "Spring cloud", "Mongodb", "Docker"],
      },
      {
        type: AppType.API,
        title: AppNames.FINANCE_WEB,
        description: "",
        lienDemo: "http://146.59.195.214:6541/pages/custom-basket/custom-menu",
        lienGit: "https://github.com/picatsu-finance/client-angular",
        logo: LOGO.API,
        stack: ["Angular", "NebularUi", "Docker"],
      },
      // DYSTOLAB

      {
        type: AppType.WEB,
        title: AppNames.DYSTOLAB_WEB,
        description: "",
        lienDemo: "https://dystolab-client.herokuapp.com/#/login",
        lienGit: "Private",
        logo: LOGO.API,
        stack: ["Angular", "Heroku"],
      },
    ];
  }
}
