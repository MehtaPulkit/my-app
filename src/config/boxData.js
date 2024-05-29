import cdLogo from "../assets/clear_dynamics_logo.jpg";
import infosysLogo from "../assets/infosys_logo.jpg";
import deakinUni from "../assets/deakinUni.jpg";
import panjabUni from "../assets/panjabUni.jpg";
import workLogo from "../assets/work-logo.svg";
export const educationData = {
  id: "education",
  titleImg:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgElEQVR4nO2ZT2vUQBjGI1hUUFT8AOI3UL+ANwUP4p/v4cGbngp1Bb31IgRK53nSLmTeldqT1z24Sy8iIh4E7+JFKWjRFiHyNo3GNZvMJrubVPLAsNndmcz85v2zmXc9r1WrVv+/SPsIkF1Sopy2Dcgb0i6trz87P3qPIJALpHTiPrKddy/Ec3WmBuCw+JFmd4yxd/9sgNwj5fuE9/gxNYDJJv5rEYuAPCw73puFu4wbJyIngd5VQF7mLGpAhte076SbBVe3KnKXovH9fv8oIOG/C7Ci3xWNZ1W3moZZfV9Ok/I5tXtf9DOXsaw6f1bnMn4JSJACCFzHser80wLQdJoy/dJhBFhMZ6MWgK0FpHUhF7ENYrZZaF9tGmUDfsgAu7m2Fl52eYhrXBAbIxdd+zYSIBFgHwPyTc8JgH1A9i5FUXTkEAHI14yzwUfSrgZBeHPUvZoIkHdCiwA77Ha7Z1Nz7TUCwPf9hRhA3Sb/kELKqwTCmPBOAlErAClX9FWzkANABNjX5Ma5eGzvtkLUCqA7v7KyeUoDNvb5YgiOWKJWgIOSyo2D61VHgChtidoBSHmq14DccgXgiCXGBfZcAAD5tLz84lhcarHDshAmI7DnAhC7hNzX97oYXVRVCK8qwPhmd0j7DpAncSH3N8BPrcZNC8IrAzB5cXe/kPs2qypRFaKsBTolIKJxZZWZQrCEv6uMeX6GDK+TslUEMFMIlgRIpBmHlI0igAoQg+QxpRBghm0vCchuCYgks2Wqmq/PBwKQ93kW6DQdApBdr4nqOkIA8sFrqrpOEO7V7johBtm7b4cicsJrunzfX9BsowGr/42p2+jOG2OO1722Vl5KvwA8PxAwzMFhPAAAAABJRU5ErkJggg==",
  title: "Education",
  items: [
    {
      title: "Deakin University",
      img: deakinUni,
      category: "University",
      type: "Degree",
      acheivement: "Masters of IT",
      detail: "Date",
      startYear: "2018",
      endYear: "2020",
    },
    {
      title: "Punjab University",
      img: panjabUni,
      category: "University",
      type: "Degree",
      acheivement: "Bachelors of Engineering",
      detail: "Date",
      startYear: "2012",
      endYear: "2016",
    },
  ],
};

export const workData = {
  id: "experience",
  titleImg:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABs0lEQVR4nO2XT0rDQBTGZ6GCHkAFXXgH3Vgv4koEwQvoFdr65wRZ5XtTqM4rRRFdFxTd9gC6UNrYGwiCUBk6pRFpG2liX3R+8CAJ85L3zZcZ5inl+eNUq9UlwBwCfAOYFsBvvTAtIr4m4gOt64tKKkFwtUDEpwC/E3F3VNgxAJ/YHCWJMORlIm66Ij8AvtCat8PwbI2Z523Ya/sMMJd2jBPVtA4qCQRBMAvwgxPxCPD6uByi2gYRP/VyzH2j0ZhR0wbgfVfQM8ArSfMqlfoqwC82V2veU9MG4Dvnxs5Pc7XmXTcJtxMXwsxzgDkGzOu4RSowIoDLVoMi4iMBBU0YpmSFRO7BpsoZWtcKfWdUX5XKKdSv3wsRAnlHhEHeEWGQd0QY5B0RBnlHhEHekf/iCI/uOAcdnXQhlKjjNKXMhGhdK6T04qEd55eOLgXC8Hzrm5C0Y4TQbL5Hg5tODoV0slwj0bBfNfYrtFP8XjcTIXZXSjCTxZxsv1yOLfp4tK2IXGy/vw15IcIg74gwyDsiDPKOCIO8I4IdidJsrH6TMH6aTnhalR7FcadV6dFO+zTtUSnxCeDoCaeOV9sjAAAAAElFTkSuQmCC",
  title: "Work",
  items: [
    {
      title: "Clear Dynamics",
      img: cdLogo,
      category: "Company",
      type: "Role",
      acheivement: "Senior Technical Lead",
      detail: "Date",
      startYear: "2020",
      endYear: "Present",
    },
    {
      title: "Infosys",
      img: infosysLogo,
      category: "Company",
      type: "Role",
      acheivement: "System Engineer",
      detail: "Date",
      startYear: "2018",
      endYear: "2016",
    },
  ],
};
