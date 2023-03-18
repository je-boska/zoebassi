export type ErrorPayloadMessage = {
  message: string;
  extensions: {
    contentful: {
      code: string;
      requestId: string;
      details: {
        maximumCost: number;
        cost: number;
      };
    };
  };
};

export type ErrorPayload = {
  errors: ErrorPayloadMessage[];
};

export type Post = {
  title: string;
  youTubeLink: string;
  imagesCollection: {
    items: Image[];
  };
};

export type Image = {
  url: string;
  width: number;
  height: number;
};
