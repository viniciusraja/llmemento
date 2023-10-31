import formatTemplateToSave from "./formatTemplateToSave";

const mockedTemplateData = {
  background: {
    serializable: true,
    id: "color-aa09cee6-1563-4d92-a4d7-a0c61b543590",
    r: 229,
    g: 115,
    b: 115,
    a: 1,
    validForVariant: true,
    pageConfig: {
      size: {
        width: 210,
        height: 297,
        unit: "mm",
        dpi: 96,
      },
    },
  },
  elements: {
    "1a538a20-59de-43fc-a1e5-a2f03e6d69d6": {
      id: "1a538a20-59de-43fc-a1e5-a2f03e6d69d6",
      metadata: {
        uploadId: "99cc283d-52ba-4095-beee-662574f3a0b2",
        imageApi: {
          id: "99cc283d-52ba-4095-beee-662574f3a0b2",
          type: "image",
          url: "https://drive.google.com/file/d/1ZMfwIHONSmN3PhWlVEL9ZLg7f8MNwwuj/view?usp=drive_link",
          preview:
            "https://wepik.com/api/image/local/4426806/99cc283d-52ba-4095-beee-662574f3a0b2?expires=1691121600&thumb=1&transparent=0&signature=64acf80dfe254c45dea22069dd008cca1ca86ca9f70fbfdd1d868c41f760a3c6",
          backgroundRemoved: null,
          origin: "uploads",
          trackedJob: null,
          data: [],
          links: [],
        },
      },
      size: {
        width: 2000,
        height: 952,
      },
      position: {
        x: 0,
        y: 590.74,
      },
      rotation: 0,
      flip: {
        x: false,
        y: false,
      },
      group: null,
      locked: false,
      keepProportions: true,
      opacity: 1,
      virtualGroup: null,
      tags: [],
      index: "a0",
      type: "image",
      url: "https://wepik.com/api/image/local/4426806/99cc283d-52ba-4095-beee-662574f3a0b2?expires=1691121600&thumb=0&transparent=0&signature=2f1f5d41771137a6a7f7f9183c46391f95626ff96186243f14510b8edd9e8de8",
      preview:
        "https://wepik.com/api/image/local/4426806/99cc283d-52ba-4095-beee-662574f3a0b2?expires=1691121600&thumb=1&transparent=0&signature=64acf80dfe254c45dea22069dd008cca1ca86ca9f70fbfdd1d868c41f760a3c6",
      urlBackgroundRemoved: null,
      filter: null,
      crop: {
        size: {
          width: 1988,
          height: 1326,
        },
        position: {
          x: 0,
          y: 0,
        },
      },
      backgroundMode: "original",
      mask: null,
    },
    "211e67ab-3eb4-47ac-a4e7-5aeb24d05851": {
      id: "211e67ab-3eb4-47ac-a4e7-5aeb24d05851",
      metadata: [],
      size: {
        width: 397,
        height: 45.72,
      },
      position: {
        x: 20.599999999999994,
        y: 213.44998779296876,
      },
      rotation: 0,
      flip: {
        x: false,
        y: false,
      },
      group: null,
      locked: false,
      keepProportions: true,
      opacity: 1,
      virtualGroup: null,
      tags: [],
      index: "a3",
      type: "text",
      fontStyle: "normal",
      fontSize: 38.112,
      lineHeight: 1.2,
      letterSpacing: 0,
      textAlign: "center",
      outline: {
        color: {
          serializable: true,
          id: "color-ab8672cd-bd88-4bc2-aa0a-153d9ec2156d",
          r: 134,
          g: 159,
          b: 178,
          a: 1,
          validForVariant: true,
        },
        width: 0,
        unit: "px",
      },
      color: {
        serializable: true,
        id: "color-32b23762-be83-4294-838b-a50c22ed9eff",
        r: 0,
        g: 0,
        b: 0,
        a: 1,
        validForVariant: true,
      },
      colors: [
        {
          serializable: true,
          id: "color-32b23762-be83-4294-838b-a50c22ed9eff",
          r: 0,
          g: 0,
          b: 0,
          a: 1,
          validForVariant: true,
        },
      ],
      textTransform: "",
      scale: 1,
      textShadow: [],
      listStyle: "",
      link: [""],
      curvedProperties: {
        arc: null,
        minArc: 0,
        transformCurve: 0,
      },
      minBoxWidth: 5,
      minBoxHeight: 5,
      fontWeight: "400",
      content:
        '<span style="font-size: 16px;" data-unique="span-96385">Estou no meu aniversãrio</span><br>',
      fontFamily: "20 db",
    },
  },
};

describe("formatTemplateToSave", () => {
  it("Returns expected format of template to save", () => {
    expect(formatTemplateToSave(mockedTemplateData)).toEqual({
      background: {
        r: 229,
        g: 115,
        b: 115,
        a: 1,
        pageConfig: {
          width: 210,
          height: 297,
          unit: "mm",
          dpi: 96,
        },
      },
      elements: [
        {
          id: "1a538a20-59de-43fc-a1e5-a2f03e6d69d6",
          metadata: {
            uploadId: "99cc283d-52ba-4095-beee-662574f3a0b2",
            imageApi: {
              id: "99cc283d-52ba-4095-beee-662574f3a0b2",
              type: "image",
              url: "https://drive.google.com/file/d/1ZMfwIHONSmN3PhWlVEL9ZLg7f8MNwwuj/view?usp=drive_link",
              preview:
                "https://wepik.com/api/image/local/4426806/99cc283d-52ba-4095-beee-662574f3a0b2?expires=1691121600&thumb=1&transparent=0&signature=64acf80dfe254c45dea22069dd008cca1ca86ca9f70fbfdd1d868c41f760a3c6",
              backgroundRemoved: null,
              origin: "uploads",
              trackedJob: null,
              data: [],
              links: [],
            },
          },
          size: {
            width: 2000,
            height: 952,
          },
          position: {
            x: 0,
            y: 590.74,
          },
          rotation: 0,
          flip: {
            x: false,
            y: false,
          },
          group: null,
          locked: false,
          keepProportions: true,
          opacity: 1,
          virtualGroup: null,
          tags: [],
          index: "a0",
          type: "image",
          url: "https://wepik.com/api/image/local/4426806/99cc283d-52ba-4095-beee-662574f3a0b2?expires=1691121600&thumb=0&transparent=0&signature=2f1f5d41771137a6a7f7f9183c46391f95626ff96186243f14510b8edd9e8de8",
          preview:
            "https://wepik.com/api/image/local/4426806/99cc283d-52ba-4095-beee-662574f3a0b2?expires=1691121600&thumb=1&transparent=0&signature=64acf80dfe254c45dea22069dd008cca1ca86ca9f70fbfdd1d868c41f760a3c6",
          urlBackgroundRemoved: null,
          filter: null,
          crop: {
            size: {
              width: 1988,
              height: 1326,
            },
            position: {
              x: 0,
              y: 0,
            },
          },
          backgroundMode: "original",
          mask: null,
        },
        {
          id: "211e67ab-3eb4-47ac-a4e7-5aeb24d05851",
          metadata: [],
          size: {
            width: 397,
            height: 45.72,
          },
          position: {
            x: 20.599999999999994,
            y: 213.44998779296876,
          },
          rotation: 0,
          flip: {
            x: false,
            y: false,
          },
          group: null,
          locked: false,
          keepProportions: true,
          opacity: 1,
          virtualGroup: null,
          tags: [],
          index: "a3",
          type: "text",
          fontStyle: "normal",
          fontSize: 38.112,
          lineHeight: 1.2,
          letterSpacing: 0,
          textAlign: "center",
          outline: {
            color: {
              serializable: true,
              id: "color-ab8672cd-bd88-4bc2-aa0a-153d9ec2156d",
              r: 134,
              g: 159,
              b: 178,
              a: 1,
              validForVariant: true,
            },
            width: 0,
            unit: "px",
          },
          color: {
            serializable: true,
            id: "color-32b23762-be83-4294-838b-a50c22ed9eff",
            r: 0,
            g: 0,
            b: 0,
            a: 1,
            validForVariant: true,
          },
          colors: [
            {
              serializable: true,
              id: "color-32b23762-be83-4294-838b-a50c22ed9eff",
              r: 0,
              g: 0,
              b: 0,
              a: 1,
              validForVariant: true,
            },
          ],
          textTransform: "",
          scale: 1,
          textShadow: [],
          listStyle: "",
          link: [""],
          curvedProperties: {
            arc: null,
            minArc: 0,
            transformCurve: 0,
          },
          minBoxWidth: 5,
          minBoxHeight: 5,
          fontWeight: "400",
          content:
            '<span style="font-size: 16px;" data-unique="span-96385">Estou no meu aniversãrio</span><br>',
          fontFamily: "20 db",
        },
      ],
    });
  });
});
